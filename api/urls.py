from django.urls import path
from todos.views import TodoListApiView, TodoListCreateApiView, TodoDetailApiView

app_name = 'api'

urlpatterns = [
    path('todos/<int:pk>/', TodoDetailApiView.as_view(), name="todo_detail"),
    path('todos/new/', TodoListCreateApiView.as_view(), name="todo_create"),
    path('todos/', TodoListApiView.as_view(), name="todo_list"),
]
