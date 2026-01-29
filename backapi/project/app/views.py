from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import SignupSerializer,OrderSerializer
from django.contrib.auth import authenticate


@api_view(["POST"])
def post_data(request):
    if request.method == "POST":
        serial=SignupSerializer(data=request.data)
        if serial.is_valid():
            serial.save()
            return Response(serial.data,status=status.HTTP_201_CREATED)
        return Response(serial.errors,status=status.HTTP_400_BAD_REQUEST)


@api_view(["POST"])
def signin(request):
    username = request.data.get("username")
    password = request.data.get("password")

    if not username or not password:
        return Response({"error": "Username and password required"},status=status.HTTP_400_BAD_REQUEST)
    user = authenticate(username=username, password=password)
    if user is not None:
        return Response({"message": "Login successful"},status=status.HTTP_200_OK)
    else:
        return Response({"error": "Invalid username or password"},status=status.HTTP_401_UNAUTHORIZED)

# order page
@api_view(['POST'])
def create_order(request):
    serializer = OrderSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Order placed successfully"}, status=status.HTTP_201_CREATED)
    
    print(serializer.errors) 
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)