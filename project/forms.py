# forms.py
from django import forms
from django.contrib.auth.forms import PasswordResetForm
from django.contrib.auth.models import User
from django.utils.translation import gettext_lazy as _

class CustomPasswordResetForm(PasswordResetForm):
    def clean(self):
        cleaned_data = super().clean()
        email = cleaned_data.get("email")
        if email:
            users = User.objects.filter(email=email)
            if not users.exists():
                self.add_error('email', _("Email address not found."))
        return cleaned_data
