from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Task
from .serializers import TaskSerializer
from rest_framework.pagination import PageNumberPagination


class TaskListPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 100


class TaskList(APIView):
    pagination_class = TaskListPagination

    def get(self, request):
        tasks = Task.objects.all().order_by('-created_at')
        paginator = self.pagination_class()
        # Sorting options
        sort_by = request.query_params.get('sort_by', None)
        if sort_by == "order-added":
            tasks = tasks
        elif sort_by == "min-date":
            tasks = tasks.order_by('date')
        elif sort_by == "max-date":
            tasks = tasks.order_by('-date')
        elif sort_by == "completed-first":
            tasks = tasks.order_by('-is_complete')
        elif sort_by == "uncompleted-first":
            tasks = tasks.order_by('is_complete')

        result_page = paginator.paginate_queryset(tasks, request)
        serializer = TaskSerializer(result_page, many=True)
        return paginator.get_paginated_response(serializer.data)

    def post(self, request):
        serializer = TaskSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class TaskDetail(APIView):
    def get_task(self, pk):
        try:
            return Task.objects.get(pk=pk)
        except Task.DoesNotExist:
            raise status.HTTP_404_NOT_FOUND

    def get(self, request, pk):
        task = self.get_task(pk)
        serializer = TaskSerializer(task)
        return Response(serializer.data)

    def put(self, request, pk):
        task = self.get_task(pk)
        serializer = TaskSerializer(task, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        task = self.get_task(pk)
        task.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class MarkAsImportantAndUnImportant(APIView):
    def get_task(self, pk):
        try:
            return Task.objects.get(pk=pk)
        except Task.DoesNotExist:
            raise status.HTTP_404_NOT_FOUND

    def put(self, request, pk):
        task = self.get_task(pk)
        important = request.data['important']
        task.important = important
        task.save()
        serializer = TaskSerializer(task)
        return Response(serializer.data)


class MarkAsCompletedAndUncompleted(APIView):
    def get_task(self, pk):
        try:
            return Task.objects.get(pk=pk)
        except Task.DoesNotExist:
            raise status.HTTP_404_NOT_FOUND

    def put(self, request, pk):
        task = self.get_task(pk)
        completed = request.data['completed']
        task.completed = completed
        task.save()
        serializer = TaskSerializer(task)
        return Response(serializer.data)

