from django.db import models

class Order(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    address = models.TextField(max_length=200)

    product_name = models.CharField(max_length=100)
    quantity = models.IntegerField()
    total_price = models.IntegerField()

    payment = models.CharField(max_length=20)

    created_at = models.DateTimeField(auto_now_add=True)



    def __str__(self):
        return self.name


# contact form
class Contact(models.Model):
    name = models.CharField(max_length=50)
    phone = models.CharField(max_length=15)
    email = models.EmailField()
    message = models.TextField(max_length=200)

    def __str__(self):
        return self.name



