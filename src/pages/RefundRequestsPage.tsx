
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Calendar, DollarSign, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const RefundRequestsPage = () => {
  const refundRequests = [
    {
      id: 1,
      transactionId: 'TXN-001234',
      amount: 2500,
      date: '2024-12-05',
      reason: 'Service Cancelled',
      status: 'approved',
      description: 'Appointment was cancelled due to doctor unavailability'
    },
    {
      id: 2,
      transactionId: 'TXN-001235',
      amount: 1500,
      date: '2024-11-28',
      reason: 'Billing Error',
      status: 'pending',
      description: 'Duplicate charge on my account'
    },
    {
      id: 3,
      transactionId: 'TXN-001236',
      amount: 3000,
      date: '2024-11-15',
      reason: 'Service Not Provided',
      status: 'processing',
      description: 'Lab test was not conducted as scheduled'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'pending':
        return <Clock className="h-5 w-5 text-yellow-600" />;
      case 'processing':
        return <AlertCircle className="h-5 w-5 text-blue-600" />;
      default:
        return <Clock className="h-5 w-5 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-green-50 text-green-700 border-green-200';
      case 'pending':
        return 'bg-yellow-50 text-yellow-700 border-yellow-200';
      case 'processing':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Refund Requests</h1>
        <p className="text-gray-600">Track the status of your refund requests.</p>
      </div>

      {refundRequests.length === 0 ? (
        <Card>
          <CardContent className="p-8 text-center">
            <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No Refund Requests</h3>
            <p className="text-gray-600">You haven't submitted any refund requests yet.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {refundRequests.map((request) => (
            <Card key={request.id}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(request.status)}
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          Refund Request #{request.transactionId}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                          <div className="flex items-center space-x-1">
                            <DollarSign className="h-4 w-4" />
                            <span>₱{request.amount.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{request.date}</span>
                          </div>
                        </div>
                        <div className="mt-2">
                          <p className="text-sm text-gray-600">
                            <strong>Reason:</strong> {request.reason}
                          </p>
                          <p className="text-sm text-gray-600 mt-1">
                            {request.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(request.status)}`}>
                    {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default RefundRequestsPage;
