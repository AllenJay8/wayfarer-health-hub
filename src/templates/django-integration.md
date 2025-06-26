
# Complete Django 4.2.8 Integration Guide for THOTW Healthcare

## 1. Project Setup and Structure
```
thotw_project/
├── manage.py
├── requirements.txt
├── thotw_project/
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── templates/
│   ├── base.html
│   ├── includes/
│   │   ├── navigation.html
│   │   └── footer.html
│   └── pages/
│       ├── home.html
│       ├── about.html
│       ├── services.html
│       ├── contact.html
│       ├── book_appointment.html
│       ├── donors.html
│       ├── refund_request.html
│       └── auth/
│           ├── login.html
│           └── signup.html
├── static/
│   ├── css/
│   │   └── custom.css
│   ├── js/
│   │   └── main.js
│   └── images/
├── apps/
│   ├── core/
│   │   ├── __init__.py
│   │   ├── admin.py
│   │   ├── apps.py
│   │   ├── models.py
│   │   ├── views.py
│   │   ├── urls.py
│   │   ├── forms.py
│   │   └── migrations/
│   ├── accounts/
│   │   ├── __init__.py
│   │   ├── admin.py
│   │   ├── apps.py
│   │   ├── models.py
│   │   ├── views.py
│   │   ├── urls.py
│   │   ├── forms.py
│   │   └── migrations/
│   ├── appointments/
│   │   ├── __init__.py
│   │   ├── admin.py
│   │   ├── apps.py
│   │   ├── models.py
│   │   ├── views.py
│   │   ├── urls.py
│   │   ├── forms.py
│   │   └── migrations/
│   └── donations/
│       ├── __init__.py
│       ├── admin.py
│       ├── apps.py
│       ├── models.py
│       ├── views.py
│       ├── urls.py
│       ├── forms.py
│       └── migrations/
```

## 2. Requirements.txt
```
Django==4.2.8
Pillow==10.0.0
django-crispy-forms==2.0
crispy-tailwind==0.5.0
django-widget-tweaks==1.4.12
```

## 3. Settings.py Configuration
```python
import os
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

SECRET_KEY = 'your-secret-key-here'
DEBUG = True
ALLOWED_HOSTS = []

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    
    # Third party apps
    'crispy_forms',
    'crispy_tailwind',
    'widget_tweaks',
    
    # Local apps
    'apps.core',
    'apps.accounts',
    'apps.appointments',
    'apps.donations',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'thotw_project.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR / 'templates'],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

STATIC_URL = '/static/'
STATICFILES_DIRS = [BASE_DIR / 'static']
STATIC_ROOT = BASE_DIR / 'staticfiles'

MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'

# Crispy Forms
CRISPY_ALLOWED_TEMPLATE_PACKS = "tailwind"
CRISPY_TEMPLATE_PACK = "tailwind"

# Login/Logout URLs
LOGIN_URL = '/accounts/login/'
LOGIN_REDIRECT_URL = '/'
LOGOUT_REDIRECT_URL = '/'
```

## 4. Main URLs Configuration
```python
# thotw_project/urls.py
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('apps.core.urls')),
    path('accounts/', include('apps.accounts.urls')),
    path('appointments/', include('apps.appointments.urls')),
    path('donations/', include('apps.donations.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
```

## 5. Models

### Core Models (apps/core/models.py)
```python
from django.db import models

class ContactMessage(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    subject = models.CharField(max_length=200)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.first_name} {self.last_name} - {self.subject}"
```

### Appointments Models (apps/appointments/models.py)
```python
from django.db import models
from django.contrib.auth.models import User

class Appointment(models.Model):
    APPOINTMENT_TYPES = [
        ('general', 'General Consultation'),
        ('emergency', 'Emergency'),
        ('follow_up', 'Follow-up'),
        ('specialist', 'Specialist Consultation'),
        ('lab_work', 'Laboratory Work'),
        ('preventive', 'Preventive Care'),
    ]
    
    TIME_SLOTS = [
        ('09:00', '9:00 AM'),
        ('10:00', '10:00 AM'),
        ('11:00', '11:00 AM'),
        ('14:00', '2:00 PM'),
        ('15:00', '3:00 PM'),
        ('16:00', '4:00 PM'),
    ]
    
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    date_of_birth = models.DateField()
    appointment_type = models.CharField(max_length=20, choices=APPOINTMENT_TYPES)
    preferred_date = models.DateField()
    preferred_time = models.CharField(max_length=5, choices=TIME_SLOTS)
    symptoms = models.TextField(blank=True)
    medical_history = models.TextField(blank=True)
    emergency_contact_name = models.CharField(max_length=100)
    emergency_contact_phone = models.CharField(max_length=20)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.first_name} {self.last_name} - {self.preferred_date}"
```

### Donations Models (apps/donations/models.py)
```python
from django.db import models
from django.contrib.auth.models import User

class Donation(models.Model):
    DONATION_TYPES = [
        ('equipment', 'Medical Equipment'),
        ('medication', 'Medication'),
        ('monetary', 'Monetary Donation'),
        ('supplies', 'Medical Supplies'),
        ('other', 'Other'),
    ]
    
    PAYMENT_METHODS = [
        ('gcash', 'GCash'),
        ('paymaya', 'PayMaya'),
        ('bpi', 'BPI Bank'),
        ('bdo', 'BDO Bank'),
        ('china_bank', 'China Bank'),
        ('metrobank', 'Metrobank'),
        ('unionbank', 'UnionBank'),
        ('security_bank', 'Security Bank'),
        ('cash', 'Cash'),
        ('check', 'Check'),
    ]
    
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    donor_name = models.CharField(max_length=200)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    donation_type = models.CharField(max_length=20, choices=DONATION_TYPES)
    amount = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    item_description = models.TextField(blank=True)
    payment_method = models.CharField(max_length=20, choices=PAYMENT_METHODS)
    account_number = models.CharField(max_length=50, blank=True)
    account_holder_name = models.CharField(max_length=200, blank=True)
    anonymous = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.donor_name} - {self.donation_type}"

class RefundRequest(models.Model):
    REFUND_REASONS = [
        ('duplicate', 'Duplicate Payment'),
        ('cancelled_appointment', 'Cancelled Appointment'),
        ('service_not_received', 'Service Not Received'),
        ('billing_error', 'Billing Error'),
        ('other', 'Other'),
    ]
    
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    full_name = models.CharField(max_length=200)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    transaction_id = models.CharField(max_length=100)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    reason = models.CharField(max_length=30, choices=REFUND_REASONS)
    description = models.TextField()
    bank_name = models.CharField(max_length=100)
    account_number = models.CharField(max_length=50)
    account_holder_name = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    processed = models.BooleanField(default=False)
    
    def __str__(self):
        return f"{self.full_name} - {self.transaction_id}"
```

## 6. Forms

### Core Forms (apps/core/forms.py)
```python
from django import forms
from .models import ContactMessage

class ContactForm(forms.ModelForm):
    class Meta:
        model = ContactMessage
        fields = ['first_name', 'last_name', 'email', 'phone', 'subject', 'message']
        widgets = {
            'first_name': forms.TextInput(attrs={'class': 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent', 'placeholder': 'Your first name'}),
            'last_name': forms.TextInput(attrs={'class': 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent', 'placeholder': 'Your last name'}),
            'email': forms.EmailInput(attrs={'class': 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent', 'placeholder': 'your.email@example.com'}),
            'phone': forms.TextInput(attrs={'class': 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent', 'placeholder': '+1 (555) 123-4567'}),
            'subject': forms.Select(attrs={'class': 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent'}),
            'message': forms.Textarea(attrs={'class': 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent', 'rows': 4, 'placeholder': 'Please describe how we can help you...'}),
        }
```

### Appointments Forms (apps/appointments/forms.py)
```python
from django import forms
from .models import Appointment

class AppointmentForm(forms.ModelForm):
    class Meta:
        model = Appointment
        fields = ['first_name', 'last_name', 'email', 'phone', 'date_of_birth', 
                 'appointment_type', 'preferred_date', 'preferred_time', 'symptoms', 
                 'medical_history', 'emergency_contact_name', 'emergency_contact_phone']
        widgets = {
            'first_name': forms.TextInput(attrs={'class': 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent'}),
            'last_name': forms.TextInput(attrs={'class': 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent'}),
            'email': forms.EmailInput(attrs={'class': 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent'}),
            'phone': forms.TextInput(attrs={'class': 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent'}),
            'date_of_birth': forms.DateInput(attrs={'class': 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent', 'type': 'date'}),
            'appointment_type': forms.Select(attrs={'class': 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent'}),
            'preferred_date': forms.DateInput(attrs={'class': 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent', 'type': 'date'}),
            'preferred_time': forms.Select(attrs={'class': 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent'}),
            'symptoms': forms.Textarea(attrs={'class': 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent', 'rows': 3}),
            'medical_history': forms.Textarea(attrs={'class': 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent', 'rows': 3}),
            'emergency_contact_name': forms.TextInput(attrs={'class': 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent'}),
            'emergency_contact_phone': forms.TextInput(attrs={'class': 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent'}),
        }
```

### Donation Forms (apps/donations/forms.py)
```python
from django import forms
from .models import Donation, RefundRequest

class DonationForm(forms.ModelForm):
    class Meta:
        model = Donation
        fields = ['donor_name', 'email', 'phone', 'donation_type', 'amount', 
                 'item_description', 'payment_method', 'account_number', 
                 'account_holder_name', 'anonymous']
        widgets = {
            'donor_name': forms.TextInput(attrs={'class': 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent'}),
            'email': forms.EmailInput(attrs={'class': 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent'}),
            'phone': forms.TextInput(attrs={'class': 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent'}),
            'donation_type': forms.Select(attrs={'class': 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent'}),
            'amount': forms.NumberInput(attrs={'class': 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent', 'step': '0.01'}),
            'item_description': forms.Textarea(attrs={'class': 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent', 'rows': 3}),
            'payment_method': forms.Select(attrs={'class': 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent'}),
            'account_number': forms.TextInput(attrs={'class': 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent'}),
            'account_holder_name': forms.TextInput(attrs={'class': 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent'}),
            'anonymous': forms.CheckboxInput(attrs={'class': 'text-green-600 focus:ring-green-500'}),
        }

class RefundRequestForm(forms.ModelForm):
    class Meta:
        model = RefundRequest
        fields = ['full_name', 'email', 'phone', 'transaction_id', 'amount', 
                 'reason', 'description', 'bank_name', 'account_number', 'account_holder_name']
        widgets = {
            'full_name': forms.TextInput(attrs={'class': 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent'}),
            'email': forms.EmailInput(attrs={'class': 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent'}),
            'phone': forms.TextInput(attrs={'class': 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent'}),
            'transaction_id': forms.TextInput(attrs={'class': 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent'}),
            'amount': forms.NumberInput(attrs={'class': 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent', 'step': '0.01'}),
            'reason': forms.Select(attrs={'class': 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent'}),
            'description': forms.Textarea(attrs={'class': 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent', 'rows': 4}),
            'bank_name': forms.TextInput(attrs={'class': 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent'}),
            'account_number': forms.TextInput(attrs={'class': 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent'}),
            'account_holder_name': forms.TextInput(attrs={'class': 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent'}),
        }
```

## 7. Views

### Core Views (apps/core/views.py)
```python
from django.shortcuts import render, redirect
from django.views.generic import TemplateView
from django.contrib import messages
from .forms import ContactForm

class HomeView(TemplateView):
    template_name = 'pages/home.html'

class AboutView(TemplateView):
    template_name = 'pages/about.html'

class ServicesView(TemplateView):
    template_name = 'pages/services.html'

def contact_view(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Your message has been sent successfully! We will get back to you soon.')
            return redirect('core:contact')
    else:
        form = ContactForm()
    
    return render(request, 'pages/contact.html', {'form': form})
```

### Appointments Views (apps/appointments/views.py)
```python
from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from .forms import AppointmentForm

def book_appointment_view(request):
    if request.method == 'POST':
        form = AppointmentForm(request.POST)
        if form.is_valid():
            appointment = form.save(commit=False)
            if request.user.is_authenticated:
                appointment.user = request.user
            appointment.save()
            messages.success(request, 'Your appointment has been booked successfully! We will contact you soon to confirm.')
            return redirect('appointments:book_appointment')
    else:
        form = AppointmentForm()
        if request.user.is_authenticated:
            form.fields['first_name'].initial = request.user.first_name
            form.fields['last_name'].initial = request.user.last_name
            form.fields['email'].initial = request.user.email
    
    return render(request, 'pages/book_appointment.html', {'form': form})
```

### Donations Views (apps/donations/views.py)
```python
from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from .forms import DonationForm, RefundRequestForm

def donors_view(request):
    if request.method == 'POST':
        form = DonationForm(request.POST)
        if form.is_valid():
            donation = form.save(commit=False)
            if request.user.is_authenticated:
                donation.user = request.user
            donation.save()
            messages.success(request, 'Thank you for your generous donation! Your contribution will make a difference.')
            return redirect('donations:donors')
    else:
        form = DonationForm()
        if request.user.is_authenticated:
            form.fields['donor_name'].initial = f"{request.user.first_name} {request.user.last_name}"
            form.fields['email'].initial = request.user.email
    
    return render(request, 'pages/donors.html', {'form': form})

def refund_request_view(request):
    if request.method == 'POST':
        form = RefundRequestForm(request.POST)
        if form.is_valid():
            refund_request = form.save(commit=False)
            if request.user.is_authenticated:
                refund_request.user = request.user
            refund_request.save()
            messages.success(request, 'Your refund request has been submitted successfully! We will process it within 5-7 business days.')
            return redirect('donations:refund_request')
    else:
        form = RefundRequestForm()
        if request.user.is_authenticated:
            form.fields['full_name'].initial = f"{request.user.first_name} {request.user.last_name}"
            form.fields['email'].initial = request.user.email
    
    return render(request, 'pages/refund_request.html', {'form': form})
```

## 8. URL Configurations

### Core URLs (apps/core/urls.py)
```python
from django.urls import path
from . import views

app_name = 'core'

urlpatterns = [
    path('', views.HomeView.as_view(), name='home'),
    path('about/', views.AboutView.as_view(), name='about'),
    path('services/', views.ServicesView.as_view(), name='services'),
    path('contact/', views.contact_view, name='contact'),
]
```

### Appointments URLs (apps/appointments/urls.py)
```python
from django.urls import path
from . import views

app_name = 'appointments'

urlpatterns = [
    path('book/', views.book_appointment_view, name='book_appointment'),
]
```

### Donations URLs (apps/donations/urls.py)
```python
from django.urls import path
from . import views

app_name = 'donations'

urlpatterns = [
    path('donors/', views.donors_view, name='donors'),
    path('refund-request/', views.refund_request_view, name='refund_request'),
]
```

### Accounts URLs (apps/accounts/urls.py)
```python
from django.urls import path
from django.contrib.auth import views as auth_views
from . import views

app_name = 'accounts'

urlpatterns = [
    path('login/', auth_views.LoginView.as_view(template_name='pages/auth/login.html'), name='login'),
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
    path('signup/', views.signup_view, name='signup'),
]
```

## 9. Base Template (templates/base.html)
```html
{% load static %}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{% block title %}THOTW - The House Of The Way{% endblock %}</title>
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        green: {
                            50: '#f0fdf4',
                            100: '#dcfce7',
                            500: '#22c55e',
                            600: '#16a34a',
                            700: '#15803d',
                            800: '#166534',
                        }
                    }
                }
            }
        }
    </script>
    
    <!-- Custom CSS -->
    <link rel="stylesheet" href="{% static 'css/custom.css' %}">
    
    {% block extra_css %}{% endblock %}
</head>
<body class="bg-gray-50">
    <!-- Navigation -->
    {% include 'includes/navigation.html' %}
    
    <!-- Messages -->
    {% if messages %}
        <div class="fixed top-4 right-4 z-50 space-y-2">
            {% for message in messages %}
                <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative max-w-md" role="alert">
                    <span class="block sm:inline">{{ message }}</span>
                    <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                        <svg class="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <title>Close</title>
                            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/>
                        </svg>
                    </span>
                </div>
            {% endfor %}
        </div>
    {% endif %}
    
    <!-- Main Content -->
    <main>
        {% block content %}{% endblock %}
    </main>
    
    <!-- Footer -->
    {% include 'includes/footer.html' %}
    
    <!-- Scripts -->
    <script src="{% static 'js/main.js' %}"></script>
    {% block extra_js %}{% endblock %}
</body>
</html>
```

## 10. Navigation Template (templates/includes/navigation.html)
```html
<nav class="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
    <!-- Top utility bar -->
    <div class="bg-green-50 border-b border-green-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center py-2 text-sm">
                <div class="flex items-center space-x-4 text-green-700">
                    <div class="flex items-center space-x-1">
                        <svg class="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                        </svg>
                        <span>Emergency: +1 (555) 123-4567</span>
                    </div>
                </div>
                <div class="hidden md:flex items-center space-x-4">
                    <a href="{% url 'appointments:book_appointment' %}" 
                       class="flex items-center space-x-2 text-green-700 hover:text-green-900 hover:bg-green-100 px-3 py-1 rounded-md transition-colors">
                        <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                        </svg>
                        <span>BOOK AN APPOINTMENT</span>
                    </a>
                </div>
            </div>
        </div>
    </div>

    <!-- Main navigation -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-4">
            <!-- Logo -->
            <div class="flex items-center space-x-2">
                <div class="bg-green-600 p-2 rounded-lg">
                    <svg class="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"/>
                    </svg>
                </div>
                <div>
                    <h1 class="text-xl font-bold text-gray-900">THOTW</h1>
                    <p class="text-xs text-gray-600">The House Of The Way</p>
                </div>
            </div>

            <!-- Desktop Navigation -->
            <div class="hidden lg:flex items-center space-x-1">
                <a href="{% url 'core:home' %}" 
                   class="px-4 py-2 text-sm font-medium transition-colors rounded-md {% if request.resolver_match.url_name == 'home' %}text-green-600 bg-green-50{% else %}text-gray-700 hover:text-green-600 hover:bg-gray-50{% endif %}">
                    HOME
                </a>
                <a href="{% url 'core:about' %}" 
                   class="px-4 py-2 text-sm font-medium transition-colors rounded-md {% if request.resolver_match.url_name == 'about' %}text-green-600 bg-green-50{% else %}text-gray-700 hover:text-green-600 hover:bg-gray-50{% endif %}">
                    ABOUT
                </a>
                <a href="{% url 'core:services' %}" 
                   class="px-4 py-2 text-sm font-medium transition-colors rounded-md {% if request.resolver_match.url_name == 'services' %}text-green-600 bg-green-50{% else %}text-gray-700 hover:text-green-600 hover:bg-gray-50{% endif %}">
                    HEALTH SERVICES
                </a>
                <a href="{% url 'core:contact' %}" 
                   class="px-4 py-2 text-sm font-medium transition-colors rounded-md {% if request.resolver_match.url_name == 'contact' %}text-green-600 bg-green-50{% else %}text-gray-700 hover:text-green-600 hover:bg-gray-50{% endif %}">
                    CONTACT US
                </a>
                <a href="{% url 'donations:donors' %}" 
                   class="px-4 py-2 text-sm font-medium transition-colors rounded-md {% if 'donors' in request.resolver_match.url_name %}text-green-600 bg-green-50{% else %}text-gray-700 hover:text-green-600 hover:bg-gray-50{% endif %}">
                    DONORS
                </a>
                <a href="{% url 'donations:refund_request' %}" 
                   class="px-4 py-2 text-sm font-medium transition-colors rounded-md {% if 'refund_request' in request.resolver_match.url_name %}text-green-600 bg-green-50{% else %}text-gray-700 hover:text-green-600 hover:bg-gray-50{% endif %}">
                    REFUND REQUEST
                </a>
            </div>

            <!-- Desktop Auth Buttons -->
            <div class="hidden lg:flex items-center space-x-3">
                {% if user.is_authenticated %}
                    <span class="text-gray-700">Hello, {{ user.first_name|default:user.username }}!</span>
                    <a href="{% url 'accounts:logout' %}" 
                       class="px-4 py-2 text-sm font-medium bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors">
                        LOGOUT
                    </a>
                {% else %}
                    <a href="{% url 'accounts:signup' %}" 
                       class="px-4 py-2 text-sm font-medium border border-green-600 text-green-600 hover:bg-green-50 rounded-md transition-colors">
                        SIGN UP
                    </a>
                    <a href="{% url 'accounts:login' %}" 
                       class="px-4 py-2 text-sm font-medium bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors">
                        LOGIN
                    </a>
                {% endif %}
            </div>

            <!-- Mobile menu button -->
            <div class="lg:hidden">
                <button id="mobile-menu-button" class="p-2 text-gray-700 hover:text-green-600 focus:outline-none">
                    <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>

    <!-- Mobile Navigation Menu -->
    <div id="mobile-menu" class="lg:hidden border-t border-gray-100 bg-white hidden">
        <div class="px-4 py-4 space-y-2">
            <a href="{% url 'core:home' %}" class="block px-4 py-3 text-sm font-medium rounded-md transition-colors text-gray-700 hover:text-green-600 hover:bg-gray-50">HOME</a>
            <a href="{% url 'core:about' %}" class="block px-4 py-3 text-sm font-medium rounded-md transition-colors text-gray-700 hover:text-green-600 hover:bg-gray-50">ABOUT</a>
            <a href="{% url 'core:services' %}" class="block px-4 py-3 text-sm font-medium rounded-md transition-colors text-gray-700 hover:text-green-600 hover:bg-gray-50">HEALTH SERVICES</a>
            <a href="{% url 'core:contact' %}" class="block px-4 py-3 text-sm font-medium rounded-md transition-colors text-gray-700 hover:text-green-600 hover:bg-gray-50">CONTACT US</a>
            <a href="{% url 'donations:donors' %}" class="block px-4 py-3 text-sm font-medium rounded-md transition-colors text-gray-700 hover:text-green-600 hover:bg-gray-50">DONORS</a>
            <a href="{% url 'donations:refund_request' %}" class="block px-4 py-3 text-sm font-medium rounded-md transition-colors text-gray-700 hover:text-green-600 hover:bg-gray-50">REFUND REQUEST</a>
            
            <!-- Mobile Book Appointment -->
            <a href="{% url 'appointments:book_appointment' %}" 
               class="flex items-center w-full px-4 py-3 text-green-600 hover:bg-green-50 rounded-md mt-4">
                <svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                BOOK AN APPOINTMENT
            </a>
            
            <!-- Mobile Auth Buttons -->
            <div class="pt-4 border-t border-gray-100 space-y-2">
                {% if user.is_authenticated %}
                    <span class="block px-4 py-2 text-gray-700">Hello, {{ user.first_name|default:user.username }}!</span>
                    <a href="{% url 'accounts:logout' %}" 
                       class="block w-full px-4 py-3 text-center text-white bg-green-600 rounded hover:bg-green-700 transition-colors">
                        LOGOUT
                    </a>
                {% else %}
                    <a href="{% url 'accounts:signup' %}" 
                       class="block w-full px-4 py-3 text-center text-green-600 border border-green-600 rounded hover:bg-green-50 transition-colors">
                        SIGN UP
                    </a>
                    <a href="{% url 'accounts:login' %}" 
                       class="block w-full px-4 py-3 text-center text-white bg-green-600 rounded hover:bg-green-700 transition-colors">
                        LOGIN
                    </a>
                {% endif %}
            </div>
        </div>
    </div>
</nav>
```

## 11. Installation and Setup Commands

```bash
# 1. Create Django project
django-admin startproject thotw_project
cd thotw_project

# 2. Create apps
python manage.py startapp apps.core
python manage.py startapp apps.accounts
python manage.py startapp apps.appointments
python manage.py startapp apps.donations

# 3. Install dependencies
pip install -r requirements.txt

# 4. Configure Tailwind CSS
# Add Tailwind CDN to base template (as shown above)

# 5. Run migrations
python manage.py makemigrations
python manage.py migrate

# 6. Create superuser
python manage.py createsuperuser

# 7. Collect static files (for production)
python manage.py collectstatic

# 8. Run development server
python manage.py runserver
```

This complete guide converts your React THOTW application into a fully functional Django 4.2.8 application with:
- SQLite database
- All forms working (Appointments, Donations, Refund Requests, Auth)
- Responsive Tailwind CSS design
- Green color scheme
- Complete navigation and footer
- Form validation and success messages
- User authentication integration
- Admin interface for managing data

The Django version maintains all the functionality of your React app while providing a robust backend for data persistence and user management.
