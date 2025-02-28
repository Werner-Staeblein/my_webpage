from django.contrib import admin
from .models import starShips

# superuser PW ist admin1234

# Register your models here.

@admin.register(starShips)
class starShipsAdmin(admin.ModelAdmin):
    list_display = ('name', 'type', 'owner')
    
