
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, User, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

const AppointmentHistoryPage = () => {
  const appointments = [
    {
      id: 1,
      type: 'General Checkup',
      doctor: 'Dr. Smith',
      date: '2024-12-15',
      time: '10:00 AM',
      status: 'completed'
    },
    {
      id: 2,
      type: 'Dental Cleaning',
      doctor: 'Dr. Johnson',
      date: '2024-12-20',
      time: '2:00 PM',
      status: 'upcoming'
    },
    {
      id: 3,
      type: 'Blood Test',
      doctor: 'Lab Services',
      date: '2024-12-22',
      time: '9:00 AM',
      status: 'scheduled'
    },
    {
      id: 4,
      type: 'Consultation',
      doctor: 'Dr. Brown',
      date: '2024-11-28',
      time: '3:30 PM',
      status: 'cancelled'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'upcoming':
      case 'scheduled':
        return <Clock className="h-5 w-5 text-blue-600" />;
      case 'cancelled':
        return <XCircle className="h-5 w-5 text-red-600" />;
      default:
        return <AlertCircle className="h-5 w-5 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-50 text-green-700 border-green-200';
      case 'upcoming':
      case 'scheduled':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'cancelled':
        return 'bg-red-50 text-red-700 border-red-200';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Appointment History</h1>
        <p className="text-gray-600">Track all your past and upcoming appointments.</p>
      </div>

      <div className="space-y-4">
        {appointments.map((appointment) => (
          <Card key={appointment.id}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(appointment.status)}
                    <div>
                      <h3 className="font-semibold text-gray-900">{appointment.type}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{appointment.doctor}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{appointment.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{appointment.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(appointment.status)}`}>
                  {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AppointmentHistoryPage;
