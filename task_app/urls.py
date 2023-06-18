from django.urls import path
from .views import TaskList, TaskDetail, MarkAsCompletedAndUncompleted, MarkAsImportantAndUnImportant

urlpatterns = [
    path('tasks', TaskList.as_view(), name='task_list'),
    path('tasks/<int:pk>/', TaskDetail.as_view(), name='task_detail'),
    path('tasks/mark-as-important/<int:pk>/', MarkAsImportantAndUnImportant.as_view(), name='task_important'),
    path('tasks/mark-as-completed/<int:pk>/', MarkAsCompletedAndUncompleted.as_view(), name='task_important'),
]
