
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Calendar, CreditCard, Receipt } from 'lucide-react';

const DonationRecordsPage = () => {
  const donations = [
    {
      id: 1,
      amount: 5000,
      date: '2024-12-10',
      method: 'GCash',
      purpose: 'General Fund',
      status: 'completed'
    },
    {
      id: 2,
      amount: 10000,
      date: '2024-11-15',
      method: 'BPI',
      purpose: 'Medical Equipment',
      status: 'completed'
    },
    {
      id: 3,
      amount: 2500,
      date: '2024-10-20',
      method: 'PayMaya',
      purpose: 'Emergency Fund',
      status: 'completed'
    }
  ];

  const totalDonated = donations.reduce((sum, donation) => sum + donation.amount, 0);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Donation Records</h1>
        <p className="text-gray-600">Your contribution history and impact.</p>
      </div>

      {/* Summary Card */}
      <Card className="bg-green-50 border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-green-800">
            <Heart className="h-6 w-6" />
            <span>Total Donations</span>
          </CardTitle>
          <CardDescription className="text-green-700">
            Thank you for your generous support to THOTW healthcare services
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-green-800">
            ₱{totalDonated.toLocaleString()}
          </div>
          <p className="text-green-600 mt-2">{donations.length} donations made</p>
        </CardContent>
      </Card>

      {/* Donation History */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">Donation History</h2>
        {donations.map((donation) => (
          <Card key={donation.id}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Heart className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">₱{donation.amount.toLocaleString()}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{donation.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <CreditCard className="h-4 w-4" />
                        <span>{donation.method}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Receipt className="h-4 w-4" />
                        <span>{donation.purpose}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full text-sm font-medium bg-green-50 text-green-700 border border-green-200">
                  Completed
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DonationRecordsPage;
