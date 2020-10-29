from .serializers import TodoSerializer
from rest_framework import generics
from todos.models import Todo

class TodoListApiView(generics.ListAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

class TodoListCreateApiView(generics.CreateAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

class TodoDetailApiView(generics.RetrieveUpdateDestroy):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
