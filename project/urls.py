from django.urls import path
from . import views
from django.contrib.auth import views as auth_views
from .views import CustomLoginView
from .views import CustomLogoutView

urlpatterns = [
    path('logout/', CustomLogoutView.as_view(), name='account_logout'),
    # other URL patterns
]

urlpatterns = [
    path('', views.home, name="home"),
    path('about/', views.about, name="about"),
    path('coding/', views.coding, name="coding"),
    path('navlink2/', views.navlink2, name="navlink2"),
    
    path('verification-sent/', views.verification_sent, name='verification_sent'),

    path('login/', CustomLoginView.as_view(), name='account_login'),
    path('logout/', CustomLogoutView.as_view(), name='account_logout'),
    
    # Password reset URLs
    path('password_reset/', views.CustomPasswordResetView.as_view(), name='password_reset'),
    path('password_reset/done/', auth_views.PasswordResetDoneView.as_view(template_name='registration/password_reset_done.html'), name='password_reset_done'),
    path('reset/<uidb64>/<token>/', auth_views.PasswordResetConfirmView.as_view(template_name='registration/password_reset_confirm.html'), name='password_reset_confirm'),
    path('reset/done/', auth_views.PasswordResetCompleteView.as_view(template_name='registration/password_reset_complete.html'), name='password_reset_complete'),
    
    # API endpoint for checking email existence
    path('check-email/', views.check_email_exists, name='check_email_exists'),
]





