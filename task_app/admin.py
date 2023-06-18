from django.contrib import admin
from .models import Task


class TaskAdmin(admin.ModelAdmin):
    list_display = ['id', 'dir', 'title', 'description', 'date', 'completed', 'important']
    search_fields = ['id', 'dir', 'title', 'description', 'date', 'completed', 'important']
    list_per_page = 10


admin.site.register(Task, TaskAdmin)

