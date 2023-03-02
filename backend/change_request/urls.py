from django.urls import path
from . import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('all/', views.get_all_requests),
    path('new/', views.new_request),
    path('<int:request_id>/approve_or_reject_request/', views.approve_or_reject_request),
]