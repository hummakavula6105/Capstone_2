from django.db import models
from authentication.models import User

# Create your models here.


class Area(models.Model):
    ETM = 'ETM'
    CD6R_2pc = 'CD6R 2pc'
    P702 = 'P702'
    Supermarket = 'Supermarket'
    LD71 = 'LD71'
    AREA_CHOICES = [
        (ETM, 'ETM'),
        (CD6R_2pc, 'CD6R 2pc'),
        (P702, 'P702'),
        (Supermarket, 'Supermarket'),
        (LD71, 'LD71'),
    ]

class Request(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date_requested = models.DateField()
    expiration_date = models.DateField()
    area = models.CharField(
        max_length=20,
        choices=Area.AREA_CHOICES,
    )
    reason_for_request = models.CharField(max_length=800)
    description_of_change = models.CharField(max_length=800)
    tasks = models.CharField(max_length=800)
    is_approved = models.BooleanField(default=False)
    is_rejected = models.BooleanField(default=False)
    