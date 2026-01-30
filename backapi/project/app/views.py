from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import SignupSerializer,OrderSerializer,ContactSerializer
from django.contrib.auth import authenticate
from django.conf import settings
from django.core.mail import send_mail,EmailMessage
import os



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



from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import EmailMessage
from django.conf import settings
import os

@api_view(['POST'])
def enquiry_form(request):
    form = ContactSerializer(data=request.data)

    if form.is_valid():
        form.save()  

        name = form.validated_data['name']
        email = form.validated_data['email']
        message = form.validated_data['message']

        subject = "THANK YOU FOR ENQUIRY"
        body = f"""
Hi {name},

Thank you for reaching out to us.
Please find attached our brochure with pricing and product details.

Message received:
{message}

Best regards,
Sweet & Savory Team
"""

        email_message = EmailMessage(
            subject,
            body,
            settings.DEFAULT_FROM_EMAIL,
            [email],
        )

        brochure = os.path.join(settings.BASE_DIR, "static", "menu_card.pdf")
        if os.path.exists(brochure):
            email_message.attach_file(brochure)

        email_message.send(fail_silently=False)

        return Response(
            {"success": True, "message": "Enquiry submitted successfully"},
            status=status.HTTP_201_CREATED
        )

    return Response(form.errors, status=status.HTTP_400_BAD_REQUEST)


