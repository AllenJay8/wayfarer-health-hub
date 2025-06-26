
# Django Integration Guide for THOTW Navigation

## 1. Project Structure
```
your_project/
├── templates/
│   ├── base.html
│   ├── includes/
│   │   └── navigation.html
│   └── pages/
│       ├── home.html
│       ├── about.html
│       ├── health_services.html
│       ├── contact.html
│       ├── donors.html
│       └── refund_request.html
├── static/
│   ├── css/
│   ├── js/
│   └── images/
└── apps/
    ├── accounts/
    ├── appointments/
    ├── services/
    └── core/
```

## 2. URLs Configuration (urls.py)

### Main urls.py
```python
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('core.urls')), # Main app urls
    path('accounts/', include('accounts.urls')), # Auth urls
    path('appointments/', include('appointments.urls')), # Appointment urls
    path('services/', include('services.urls')), # Health services urls
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
```

### Core app urls.py
```python
from django.urls import path
from . import views

app_name = 'core'

urlpatterns = [
    path('', views.HomeView.as_view(), name='home'),
    path('about/', views.AboutView.as_view(), name='about'),
    path('contact/', views.ContactView.as_view(), name='contact'),
    path('donors/', views.DonorsView.as_view(), name='donors'),
    path('refund-request/', views.RefundRequestView.as_view(), name='refund_request'),
]
```

### Accounts app urls.py
```python
from django.urls import path
from django.contrib.auth import views as auth_views
from . import views

app_name = 'accounts'

urlpatterns = [
    path('signup/', views.SignUpView.as_view(), name='signup'),
    path('login/', auth_views.LoginView.as_view(template_name='accounts/login.html'), name='login'),
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
    path('profile/', views.ProfileView.as_view(), name='profile'),
]
```

### Services app urls.py
```python
from django.urls import path
from . import views

app_name = 'services'

urlpatterns = [
    path('', views.HealthServicesView.as_view(), name='health_services'),
    path('<slug:service_slug>/', views.ServiceDetailView.as_view(), name='service_detail'),
]
```

### Appointments app urls.py
```python
from django.urls import path
from . import views

app_name = 'appointments'

urlpatterns = [
    path('book/', views.BookAppointmentView.as_view(), name='book_appointment'),
    path('my-appointments/', views.MyAppointmentsView.as_view(), name='my_appointments'),
    path('cancel/<int:appointment_id>/', views.CancelAppointmentView.as_view(), name='cancel_appointment'),
]
```

## 3. Base Template (templates/base.html)
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
    
    <!-- Custom CSS -->
    <link rel="stylesheet" href="{% static 'css/custom.css' %}">
    
    {% block extra_css %}{% endblock %}
</head>
<body class="bg-gray-50">
    <!-- Navigation -->
    {% include 'includes/navigation.html' %}
    
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

## 4. Navigation Template (templates/includes/navigation.html)
```html
{% load static %}
<nav class="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
    <!-- Top utility bar -->
    <div class="bg-blue-50 border-b border-blue-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center py-2 text-sm">
                <div class="flex items-center space-x-4 text-blue-700">
                    <div class="flex items-center space-x-1">
                        <svg class="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                        </svg>
                        <span>Emergency: +1 (555) 123-4567</span>
                    </div>
                </div>
                <div class="hidden md:flex items-center space-x-4">
                    <a href="{% url 'appointments:book_appointment' %}" 
                       class="inline-flex items-center px-3 py-1 text-sm text-blue-700 hover:text-blue-900 hover:bg-blue-100 rounded">
                        <svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                        </svg>
                        BOOK AN APPOINTMENT
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
                <div class="bg-blue-600 p-2 rounded-lg">
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
                   class="px-4 py-2 text-sm font-medium transition-colors rounded-md {% if request.resolver_match.url_name == 'home' %}text-blue-600 bg-blue-50{% else %}text-gray-700 hover:text-blue-600 hover:bg-gray-50{% endif %}">
                    HOME
                </a>
                <a href="{% url 'core:about' %}" 
                   class="px-4 py-2 text-sm font-medium transition-colors rounded-md {% if request.resolver_match.url_name == 'about' %}text-blue-600 bg-blue-50{% else %}text-gray-700 hover:text-blue-600 hover:bg-gray-50{% endif %}">
                    ABOUT
                </a>
                <a href="{% url 'services:health_services' %}" 
                   class="px-4 py-2 text-sm font-medium transition-colors rounded-md {% if 'services' in request.resolver_match.namespace %}text-blue-600 bg-blue-50{% else %}text-gray-700 hover:text-blue-600 hover:bg-gray-50{% endif %}">
                    HEALTH SERVICES
                </a>
                <a href="{% url 'core:contact' %}" 
                   class="px-4 py-2 text-sm font-medium transition-colors rounded-md {% if request.resolver_match.url_name == 'contact' %}text-blue-600 bg-blue-50{% else %}text-gray-700 hover:text-blue-600 hover:bg-gray-50{% endif %}">
                    CONTACT US
                </a>
                <a href="{% url 'core:donors' %}" 
                   class="px-4 py-2 text-sm font-medium transition-colors rounded-md {% if request.resolver_match.url_name == 'donors' %}text-blue-600 bg-blue-50{% else %}text-gray-700 hover:text-blue-600 hover:bg-gray-50{% endif %}">
                    DONORS
                </a>
                <a href="{% url 'core:refund_request' %}" 
                   class="px-4 py-2 text-sm font-medium transition-colors rounded-md {% if request.resolver_match.url_name == 'refund_request' %}text-blue-600 bg-blue-50{% else %}text-gray-700 hover:text-blue-600 hover:bg-gray-50{% endif %}">
                    REFUND REQUEST
                </a>
            </div>

            <!-- Desktop Auth Buttons -->
            <div class="hidden lg:flex items-center space-x-3">
                {% if user.is_authenticated %}
                    <a href="{% url 'accounts:profile' %}" 
                       class="px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded hover:bg-blue-50 transition-colors">
                        PROFILE
                    </a>
                    <a href="{% url 'accounts:logout' %}" 
                       class="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors">
                        LOGOUT
                    </a>
                {% else %}
                    <a href="{% url 'accounts:signup' %}" 
                       class="px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded hover:bg-blue-50 transition-colors">
                        SIGN UP
                    </a>
                    <a href="{% url 'accounts:login' %}" 
                       class="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors">
                        LOGIN
                    </a>
                {% endif %}
            </div>

            <!-- Mobile menu button -->
            <div class="lg:hidden">
                <button id="mobile-menu-button" class="p-2 text-gray-700 hover:text-blue-600 focus:outline-none">
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
            <a href="{% url 'core:home' %}" class="block px-4 py-3 text-sm font-medium rounded-md transition-colors {% if request.resolver_match.url_name == 'home' %}text-blue-600 bg-blue-50{% else %}text-gray-700 hover:text-blue-600 hover:bg-gray-50{% endif %}">HOME</a>
            <a href="{% url 'core:about' %}" class="block px-4 py-3 text-sm font-medium rounded-md transition-colors {% if request.resolver_match.url_name == 'about' %}text-blue-600 bg-blue-50{% else %}text-gray-700 hover:text-blue-600 hover:bg-gray-50{% endif %}">ABOUT</a>
            <a href="{% url 'services:health_services' %}" class="block px-4 py-3 text-sm font-medium rounded-md transition-colors {% if 'services' in request.resolver_match.namespace %}text-blue-600 bg-blue-50{% else %}text-gray-700 hover:text-blue-600 hover:bg-gray-50{% endif %}">HEALTH SERVICES</a>
            <a href="{% url 'core:contact' %}" class="block px-4 py-3 text-sm font-medium rounded-md transition-colors {% if request.resolver_match.url_name == 'contact' %}text-blue-600 bg-blue-50{% else %}text-gray-700 hover:text-blue-600 hover:bg-gray-50{% endif %}">CONTACT US</a>
            <a href="{% url 'core:donors' %}" class="block px-4 py-3 text-sm font-medium rounded-md transition-colors {% if request.resolver_match.url_name == 'donors' %}text-blue-600 bg-blue-50{% else %}text-gray-700 hover:text-blue-600 hover:bg-gray-50{% endif %}">DONORS</a>
            <a href="{% url 'core:refund_request' %}" class="block px-4 py-3 text-sm font-medium rounded-md transition-colors {% if request.resolver_match.url_name == 'refund_request' %}text-blue-600 bg-blue-50{% else %}text-gray-700 hover:text-blue-600 hover:bg-gray-50{% endif %}">REFUND REQUEST</a>
            
            <!-- Mobile Book Appointment -->
            <a href="{% url 'appointments:book_appointment' %}" 
               class="flex items-center w-full px-4 py-3 text-blue-600 hover:bg-blue-50 rounded-md mt-4">
                <svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                BOOK AN APPOINTMENT
            </a>
            
            <!-- Mobile Auth Buttons -->
            <div class="pt-4 border-t border-gray-100 space-y-2">
                {% if user.is_authenticated %}
                    <a href="{% url 'accounts:profile' %}" 
                       class="block w-full px-4 py-3 text-center text-blue-600 border border-blue-600 rounded hover:bg-blue-50 transition-colors">
                        PROFILE
                    </a>
                    <a href="{% url 'accounts:logout' %}" 
                       class="block w-full px-4 py-3 text-center text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors">
                        LOGOUT
                    </a>
                {% else %}
                    <a href="{% url 'accounts:signup' %}" 
                       class="block w-full px-4 py-3 text-center text-blue-600 border border-blue-600 rounded hover:bg-blue-50 transition-colors">
                        SIGN UP
                    </a>
                    <a href="{% url 'accounts:login' %}" 
                       class="block w-full px-4 py-3 text-center text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors">
                        LOGIN
                    </a>
                {% endif %}
            </div>
        </div>
    </div>
</nav>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });
});
</script>
```

## 5. Basic Views (core/views.py)
```python
from django.shortcuts import render
from django.views.generic import TemplateView
from django.contrib.auth.mixins import LoginRequiredMixin

class HomeView(TemplateView):
    template_name = 'pages/home.html'
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['page_title'] = 'Home'
        return context

class AboutView(TemplateView):
    template_name = 'pages/about.html'
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['page_title'] = 'About Us'
        return context

class ContactView(TemplateView):
    template_name = 'pages/contact.html'
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['page_title'] = 'Contact Us'
        return context

class DonorsView(TemplateView):
    template_name = 'pages/donors.html'
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['page_title'] = 'Donors'
        return context

class RefundRequestView(LoginRequiredMixin, TemplateView):
    template_name = 'pages/refund_request.html'
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['page_title'] = 'Refund Request'
        return context
```

## 6. Static Files Setup (static/js/main.js)
```javascript
// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            
            // Toggle icon
            const icon = mobileMenuButton.querySelector('svg');
            if (mobileMenu.classList.contains('hidden')) {
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>';
            } else {
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>';
            }
        });
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
```

## Installation Steps:
1. Create the Django apps: `python manage.py startapp core accounts services appointments`
2. Add apps to INSTALLED_APPS in settings.py
3. Create the templates directory structure
4. Add the navigation template to your base template
5. Configure static files in settings.py
6. Run migrations: `python manage.py makemigrations && python manage.py migrate`
7. Create a superuser: `python manage.py createsuperuser`

This setup provides a clean, professional navigation system that's fully responsive and integrates seamlessly with Django's templating system and authentication.
