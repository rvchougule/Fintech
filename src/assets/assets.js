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
