from app import views
from django.urls import path

urlpatterns = [
    path("signup/", views.post_data,name="singup"),
    path("signin/", views.signin, name="signin"),
    path('order/', views.create_order,name="order"),
    path("enquiry/", views.enquiry_form, name="enquiry"),
]

