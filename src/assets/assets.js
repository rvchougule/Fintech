import userIcon from "../assets/img/userIcon.png";
import curve from "../assets/img/curve1.png";

export { userIcon, curve };

// logo
import Logo from "./img/bandaru_pay_logo1.png";
export { Logo };

// service Card img
import dashFlower from "./img/dashFlower.png";
import dashFlowerPot from "./img/dashFlowerPot.png";
import dashShield from "./img/dashShield.png";
import dashUser from "./img/dashUser.png";
import DashFemaleUser from "./img/DashFemaleUser.png";

export { dashFlower, dashFlowerPot, dashShield, dashUser, DashFemaleUser };

export const initialData = [
  { id: 6, name: "demo1", status: true },
  { id: 5, name: "TEST12", status: false },
  { id: 4, name: "Default", status: true },
  { id: 3, name: "Retailor-A", status: false },
  { id: 2, name: "NK Tax Cunsaltancy", status: false },
  { id: 1, name: "TEST", status: false },
  { id: 6, name: "demo1", status: true },
  { id: 5, name: "TEST12", status: false },
  { id: 4, name: "Default", status: true },
  { id: 3, name: "Retailor-A", status: false },
  { id: 2, name: "NK Tax Cunsaltancy", status: false },
  { id: 1, name: "TEST", status: false },
  { id: 6, name: "demo1", status: true },
  { id: 5, name: "TEST12", status: false },
  { id: 4, name: "Default", status: true },
  { id: 3, name: "Retailor-A", status: false },
  { id: 2, name: "NK Tax Cunsaltancy", status: false },
  { id: 1, name: "TEST", status: false },
  { id: 6, name: "demo1", status: true },
  { id: 5, name: "TEST12", status: false },
  { id: 4, name: "Default", status: true },
  { id: 3, name: "Retailor-A", status: false },
  { id: 2, name: "NK Tax Cunsaltancy", status: false },
  { id: 1, name: "TEST", status: false },
  { id: 6, name: "demo1", status: true },
  { id: 5, name: "TEST12", status: false },
  { id: 4, name: "Default", status: true },
  { id: 3, name: "Retailor-A", status: false },
  { id: 2, name: "NK Tax Cunsaltancy", status: false },
  { id: 1, name: "TEST", status: false },
  { id: 6, name: "demo1", status: true },
  { id: 5, name: "TEST12", status: false },
  { id: 4, name: "Default", status: true },
  { id: 3, name: "Retailor-A", status: false },
  { id: 2, name: "NK Tax Cunsaltancy", status: false },
  { id: 1, name: "TEST", status: false },
  { id: 6, name: "demo1", status: true },
  { id: 5, name: "TEST12", status: false },
  { id: 4, name: "Default", status: true },
  { id: 3, name: "Retailor-A", status: false },
  { id: 2, name: "NK Tax Cunsaltancy", status: false },
  { id: 1, name: "TEST", status: false },
  { id: 6, name: "demo1", status: true },
  { id: 5, name: "TEST12", status: false },
  { id: 4, name: "Default", status: true },
  { id: 3, name: "Retailor-A", status: false },
  { id: 2, name: "NK Tax Cunsaltancy", status: false },
  { id: 1, name: "TEST", status: false },
  { id: 6, name: "demo1", status: true },
  { id: 5, name: "TEST12", status: false },
  { id: 4, name: "Default", status: true },
  { id: 3, name: "Retailor-A", status: false },
  { id: 2, name: "NK Tax Cunsaltancy", status: false },
  { id: 1, name: "TEST", status: false },
];

export const fetchedCommissionData = {
  "Mobile Recharge": [
    {
      provider: "BSNL TOPUP",
      type: "Percent",
      whitelable: "1",
      md: "0.5",
      distributor: "1",
      retailer: "3",
    },
    {
      provider: "BSNL VALIDITY",
      type: "Percent",
      whitelable: "1",
      md: "0.5",
      distributor: "1",
      retailer: "3",
    },
    {
      provider: "JIORECH",
      type: "Percent",
      whitelable: "1",
      md: "1",
      distributor: "1",
      retailer: "1",
    },
    {
      provider: "VI",
      type: "Percent",
      whitelable: "1",
      md: "1",
      distributor: "1",
      retailer: "1",
    },
    {
      provider: "AIRTEL",
      type: "Percent",
      whitelable: "1",
      md: "1",
      distributor: "1",
      retailer: "1",
    },
    {
      provider: "BSNL TOPUP",
      type: "Percent",
      whitelable: "1",
      md: "0.5",
      distributor: "1",
      retailer: "3",
    },
    {
      provider: "BSNL VALIDITY",
      type: "Percent",
      whitelable: "1",
      md: "0.5",
      distributor: "1",
      retailer: "3",
    },
    {
      provider: "JIORECH",
      type: "Percent",
      whitelable: "1",
      md: "1",
      distributor: "1",
      retailer: "1",
    },
    {
      provider: "VI",
      type: "Percent",
      whitelable: "1",
      md: "1",
      distributor: "1",
      retailer: "1",
    },
    {
      provider: "AIRTEL",
      type: "Percent",
      whitelable: "1",
      md: "1",
      distributor: "1",
      retailer: "1",
    },
  ],
  AEPS: [],
  DMT: [],
  "DTH Recharge": [],
  "Micro ATM": [],
  "Bill Payments": [],
};

import schemeUsersCommission from "./user_wise_commission_data.json";

const addCommissionToUsers = (users, commissionData) => {
  return users.map((user) => ({
    ...user,
    commission: commissionData[user.name] || {}, // Assign commission if available
  }));
};

export const UsersData = addCommissionToUsers(
  initialData,
  schemeUsersCommission
);

// company manager data
import companyManagerData from "./data/CompanyManager.json";

export { companyManagerData };

// agent list
// aeps

export const AEPSData = [
  {
    id: 1,
    dateTime: "16 Jul 24 - 05:25 PM",
    userDetails: {
      name: "jerrypothula nandini",
      id: 16,
      role: "Retailer",
    },
    agentDetails: {
      agentId: "UVGJB15474722",
      agentName: "JERRYPOTHULA",
    },
    details: {
      mobile: "9533666656",
      kycName: "JERRYPOTHULA NANDINI",
    },
    status: "success",
  },
  {
    id: 2,
    dateTime: "16 Jul 24 - 03:45 PM",
    userDetails: {
      name: "rahul verma",
      id: 17,
      role: "Distributor",
    },
    agentDetails: {
      agentId: "RVJBK24548755",
      agentName: "RAHUL",
    },
    details: {
      mobile: "9876543210",
      kycName: "RAHUL VERMA",
    },
    status: "pending",
  },
  {
    id: 3,
    dateTime: "15 Jul 24 - 11:10 AM",
    userDetails: {
      name: "priya shah",
      id: 18,
      role: "Retailer",
    },
    agentDetails: {
      agentId: "PSYKU98457422",
      agentName: "PRIYA",
    },
    details: {
      mobile: "9123456780",
      kycName: "PRIYA SHAH",
    },
    status: "approved",
  },
  {
    id: 4,
    dateTime: "14 Jul 24 - 09:00 AM",
    userDetails: {
      name: "anil kumar",
      id: 19,
      role: "MD",
    },
    agentDetails: {
      agentId: "ANKUM84738291",
      agentName: "ANIL",
    },
    details: {
      mobile: "9988776655",
      kycName: "ANIL KUMAR",
    },
    status: "failed",
  },
  {
    id: 5,
    dateTime: "14 Jul 24 - 07:45 PM",
    userDetails: {
      name: "meena singh",
      id: 20,
      role: "Retailer",
    },
    agentDetails: {
      agentId: "MSING24857945",
      agentName: "MEENA",
    },
    details: {
      mobile: "9001122334",
      kycName: "MEENA SINGH",
    },
    status: "rejected",
  },
];

// fund

// transfer/return
export const transferReturn = [
  {
    id: 16,
    kycStatus: "Kyc Success",
    dateTime: "25 Jun 25 - 11:49 PM",
    name: "jerrypothula nandini",
    mobile: "9533666656",
    role: "Retailer",
    parent: {
      name: "kishore babu bandaru",
      id: 12,
      mobile: "8309207889",
      role: "Distributor",
    },
    companyProfile: "01/04/2023\nnkpay4all.com/",
    wallet: {
      main: 597574.03,
      locked: 0,
    },
  },
  {
    id: 14,
    kycStatus: "Kyc Success",
    dateTime: "01 Jun 25 - 06:23 PM",
    name: "MASTER001",
    mobile: "1234567892",
    role: "Master Distributor",
    parent: {
      name: "whitelabel001",
      id: 13,
      mobile: "1234567891",
      role: "Whitelable",
    },
    companyProfile: "01/04/2023\nnkpay4all.com/",
    wallet: {
      main: 0,
      locked: 0,
    },
  },
  {
    id: 13,
    kycStatus: "Kyc Success",
    dateTime: "25 Jun 25 - 11:35 PM",
    name: "whitelabel001",
    mobile: "1234567891",
    role: "Whitelable",
    parent: {
      name: "BANDARU KISHORE BABU",
      id: 1,
      mobile: "7997991899",
      role: "Admin",
    },
    companyProfile: "01/04/2023\nnkpay4all.com/",
    wallet: {
      main: 0,
      locked: 0,
    },
  },
  {
    id: 12,
    kycStatus: "Kyc Success",
    dateTime: "01 Jun 25 - 06:23 PM",
    name: "kishore babu bandaru",
    mobile: "8309207889",
    role: "Distributor",
    parent: {
      name: "MASTER001",
      id: 14,
      mobile: "1234567892",
      role: "Master Distributor",
    },
    companyProfile: "NK TAX CONSULTANCY\nlogin.phonesepay.in",
    wallet: {
      main: 100,
      locked: 0,
    },
  },
  {
    id: 2,
    kycStatus: "Kyc Success",
    dateTime: "28 Aug 24 - 10:11 AM",
    name: "Test",
    mobile: "1234567899",
    role: "Master Distributor",
    parent: {
      name: "Distributer",
      id: 3,
      mobile: "7208822571",
      role: "Distributor",
    },
    companyProfile: "NK TAX CONSULTANCY\nlogin.phonesepay.in",
    wallet: {
      main: 119,
      locked: 0,
    },
  },
];
