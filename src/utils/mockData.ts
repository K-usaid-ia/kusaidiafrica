import {
  Project,
  User,
  Vendor,
  Donation,
  PurchaseOrder,
  VendorCategory,
} from "@/types/schema";

export const mockUsers: User[] = [
  {
    id: "1",
    email: "donor@example.com",
    name: "John Donor",
    user_type: "donor",
    verified: true,
    wallet_address: "0x1234567890abcdef1234567890abcdef12345678",
    created_at: "2025-01-01T00:00:00Z",
  },
  {
    id: "2",
    email: "org@example.com",
    name: "Education Foundation",
    user_type: "organization",
    verified: true,
    created_at: "2025-01-01T00:00:00Z",
  },
  {
    id: "3",
    email: "vendor@example.com",
    name: "Kumasi Builders",
    user_type: "vendor",
    verified: true,
    wallet_address: "0xabcdef1234567890abcdef1234567890abcdef12",
    created_at: "2025-01-01T00:00:00Z",
  },
];


export const mockDonations: Donation[] = [
  {
    id: "1",
    project_id: "1",
    donor_id: "1",
    amount: 5000,
    transaction_hash:
      "0x1234567890abcdef1234567890abcdef12345678901234567890abcdef123456",
    status: "confirmed",
    created_at: "2025-03-05T00:00:00Z",
  },
];

export const mockPurchaseOrders: PurchaseOrder[] = [
  {
    id: "1",
    project_id: "1",
    vendor_id: "1",
    milestone_id: "1",
    amount: 15000,
    status: "paid",
    transaction_hash:
      "0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef12345678",
    delivery_confirmation: {
      confirmed_by: "2",
      confirmation_date: "2025-03-31T00:00:00Z",
      notes:
        "All materials delivered and work completed according to specifications",
      evidence_urls: [
        "https://example.com/photos/foundation1.jpg",
        "https://example.com/photos/foundation2.jpg",
      ],
    },
  },
];
