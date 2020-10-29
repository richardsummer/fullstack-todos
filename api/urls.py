from django.urls import path
from todos.views import TodoListApiView, TodoListCreateApiView

app_name = 'api'

urlpatterns = [
    path('todos/new/', TodoListCreateApiView.as_view(), name="todo_create"),
    path('todos/', TodoListApiView.as_view(), name="todo_list"),
]
