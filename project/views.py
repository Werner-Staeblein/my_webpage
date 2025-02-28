from django.shortcuts import render
from django.contrib.auth.views import PasswordResetView, PasswordResetConfirmView
from django.contrib.auth.forms import PasswordResetForm
from .forms import CustomPasswordResetForm
from .models import starShips
from django.http import JsonResponse
from django.contrib.auth.models import User

from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.contrib.auth.tokens import default_token_generator


# Views for rendering templates
def verification_sent(request):
    return render(request, 'account/verification_sent.html')

from django.shortcuts import render

def home(request):
    if request.user.is_authenticated:
        return render(request, 'home_authenticated.html')
    else:
        return render(request, 'home.html')

def about(request):
    return render(request, "about.html")

def navlink1(request):
    return render(request, "navlink1.html")

def navlink2(request):
    return render(request, "navlink2.html")



def ships_view(request):
    ships = starShips.objects.all()
    context = {'ships': ships}
    return render(request, "star_wars_data.html", context)

# View to check if email exists
def check_email_exists(request):
    email = request.GET.get('email')
    exists = User.objects.filter(email=email).exists()
    return JsonResponse({'exists': exists})

# Custom Password Reset View
class CustomPasswordResetView(PasswordResetView):
    form_class = CustomPasswordResetForm
    
    def send_mail(self, subject_template_name, email_template_name, context, from_email, to_email, html_email_template_name=None):
        subject = render_to_string(subject_template_name, context)
        subject = ''.join(subject.splitlines())  # Clean the subject

        email_body = render_to_string(email_template_name, context)
        
        send_mail(subject, email_body, from_email, [to_email], html_message=html_email_template_name)

# Custom Password Reset Confirm View
class CustomPasswordResetConfirmView(PasswordResetConfirmView):
    template_name = 'registration/password_reset_confirm.html'

from django.contrib.auth.views import LoginView, LogoutView
from django.contrib import messages

class CustomLoginView(LoginView):
    def form_valid(self, form):
        # Call the parent class's form_valid method to log in the user
        response = super().form_valid(form)
        # Add a success message for login
        messages.success(self.request, f"Successfully signed in as {self.request.user.username}")
        return response

class CustomLogoutView(LogoutView):
    def get_next_page(self):
        # Add a success message for logout
        messages.success(self.request, "You have signed out")
        return super().get_next_page()
