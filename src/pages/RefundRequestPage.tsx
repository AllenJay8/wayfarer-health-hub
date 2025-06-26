
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { RefreshCw, FileText, CreditCard } from 'lucide-react';

const refundSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  transactionId: z.string().min(1, 'Transaction ID is required'),
  serviceDate: z.string().min(1, 'Service date is required'),
  serviceType: z.string().min(1, 'Please select service type'),
  amountPaid: z.string().min(1, 'Amount paid is required'),
  refundAmount: z.string().min(1, 'Refund amount is required'),
  paymentMethod: z.string().min(1, 'Please select original payment method'),
  refundReason: z.string().min(10, 'Please provide detailed reason (minimum 10 characters)'),
  accountName: z.string().min(2, 'Account name is required for refund'),
  accountNumber: z.string().min(1, 'Account number is required for refund'),
  bankName: z.string().optional(),
  supportingDocuments: z.string().optional(),
});

type RefundForm = z.infer<typeof refundSchema>;

const RefundRequestPage = () => {
  const form = useForm<RefundForm>({
    resolver: zodResolver(refundSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      transactionId: '',
      serviceDate: '',
      serviceType: '',
      amountPaid: '',
      refundAmount: '',
      paymentMethod: '',
      refundReason: '',
      accountName: '',
      accountNumber: '',
      bankName: '',
      supportingDocuments: '',
    },
  });

  const onSubmit = (data: RefundForm) => {
    console.log('Refund request:', data);
    alert('Refund request submitted successfully! We will review your request and contact you within 3-5 business days.');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="text-center mb-8">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <RefreshCw className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Refund Request</h1>
            <p className="text-lg text-gray-600">Request a refund for your healthcare services</p>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">Refund Policy</h3>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• Refund requests must be submitted within 30 days of service</li>
              <li>• Processing time: 3-5 business days for review, 7-14 days for refund</li>
              <li>• Administrative fee may apply depending on the refund reason</li>
              <li>• Original payment method will be used for refunds when possible</li>
            </ul>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your first name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your last name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address *</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your.email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number *</FormLabel>
                      <FormControl>
                        <Input placeholder="+63 9XX XXX XXXX" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="transactionId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Transaction ID / Receipt Number *</FormLabel>
                      <FormControl>
                        <Input placeholder="TXN-XXXXXXXXXX" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="serviceDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service Date *</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="serviceType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Service Type *</FormLabel>
                    <FormControl>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent" {...field}>
                        <option value="">Select service type</option>
                        <option value="consultation">Medical Consultation</option>
                        <option value="laboratory">Laboratory Services</option>
                        <option value="emergency">Emergency Care</option>
                        <option value="specialist">Specialist Consultation</option>
                        <option value="wellness">Wellness Program</option>
                        <option value="appointment">Appointment Booking</option>
                        <option value="other">Other Services</option>
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="amountPaid"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Amount Paid (PHP) *</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="0.00" min="0" step="0.01" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="refundAmount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Refund Amount Requested (PHP) *</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="0.00" min="0" step="0.01" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="paymentMethod"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Original Payment Method *</FormLabel>
                    <FormControl>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent" {...field}>
                        <option value="">Select payment method</option>
                        <option value="cash">Cash</option>
                        <option value="gcash">GCash</option>
                        <option value="paymaya">PayMaya</option>
                        <option value="bdo">BDO</option>
                        <option value="bpi">BPI</option>
                        <option value="metrobank">Metrobank</option>
                        <option value="chinabank">China Bank</option>
                        <option value="credit-card">Credit Card</option>
                        <option value="debit-card">Debit Card</option>
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="refundReason"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Reason for Refund *</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Please provide detailed explanation for the refund request..." 
                        className="min-h-[120px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Refund Account Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="accountName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Account Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Name on account" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="accountNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Account/Mobile Number *</FormLabel>
                        <FormControl>
                          <Input placeholder="Account or mobile number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="bankName"
                  render={({ field }) => (
                    <FormItem className="mt-4">
                      <FormLabel>Bank Name (if applicable)</FormLabel>
                      <FormControl>
                        <Input placeholder="Bank name and branch" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="supportingDocuments"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Supporting Documents (Optional)</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="List any supporting documents you can provide (receipts, medical records, etc.)" 
                        className="min-h-[60px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="pt-6">
                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg">
                  Submit Refund Request
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default RefundRequestPage;
