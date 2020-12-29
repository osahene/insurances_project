import { createRouter, createWebHistory } from 'vue-router'
// layouts

import Admin from "@/layouts/Admin.vue";
import Auth from "@/layouts/Auth.vue";

// views for Admin layout

import Dashboard from "@/views/admin/Dashboard.vue";
import Settings from "@/views/admin/Settings.vue";
import Tables from "@/views/admin/Tables.vue";
import Report from "@/views/admin/Report.vue";
import Maps from "@/views/admin/Maps.vue";

// views for Auth layout

import Login from "@/views/auth/Login.vue";
import Register from "@/views/auth/Register.vue";

// views without layouts

import Landing from "@/views/Landing.vue";
import Profile from "@/views/Profile.vue";
import Index from "@/views/Index.vue";


// Patient Admin 

import PatientAdmin from "@/layouts/PatientAdmin.vue";

// Patient Layout

import PatientDboard from "@/views/patient/PatientDboard.vue";
import PatientProfile from "@/views/patient/PatientProfile.vue";
import Permissions from "@/views/patient/Permissions.vue";
import PatientReport from "@/views/patient/PatientReport.vue";
import MapHistory from "@/views/patient/MapHistory.vue";
import PatientWallet from "@/views/patient/PatientWallet.vue";

// Patient Profile Edit

import PatientCardSettings from "@/components/Patient/PatientCard/PatientCardSettings.vue";

// Facility 
// Facility Admin 

import FacilityAdmin from "@/layouts/FacilityAdmin.vue";

// Facility Layout

import FacilityDboard from "@/views/Facility/FacilityDboard.vue";
import FacilityProfile from "@/views/Facility/FacilityProfile.vue";
import FacilityPermissions from "@/views/Facility/FacilityPermissions.vue";
import FacilityReport from "@/views/Facility/FacilityReport.vue";
import FacilityPatientMap from "@/views/Facility/FacilityPatientMap.vue";
import FacilityAccount from "@/views/Facility/FacilityAccount.vue";

// Patient Profile Edit

import FacilityProfileUpdate from "@/components/Facility/FacilityCard/FacilityProfileUpdate.vue";

const routes = ([
  {
    path: "/admin",
    redirect: "/admin/dashboard",
    component: Admin,
    children: [
      {
        path: "/admin/dashboard",
        component: Dashboard,
      },
      {
        path: "/admin/settings",
        component: Settings,
      },
      {
        path: "/admin/tables",
        component: Tables,
      },
      {
        path: "/admin/report",
        component: Report,
      },
      {
        path: "/admin/maps",
        component: Maps,
      },
    ],
  },

  // Patient Routes
  {
    path: "/patient",
    redirect: "/patient/dashboard",
    component: PatientAdmin,
    children: [
      {
        path: "/patient/dashboard",
        component: PatientDboard,
      },
      {
        path: "/patient/profile",
        component: PatientProfile,
      },
      {
        path: "/edit/profile",
        component: PatientCardSettings,
      },
    ],
  },
  {
    path: "/patient/patientreport",
    component: PatientReport,
  },
  {
    path: "/patient/maphistory",
    component: MapHistory,
  },
  {
    path: "/patient/wallet",
    component: PatientWallet,
  },
  {
    path: "/patient/permissions",
    component: Permissions,
  },

// Facility
{
  path: "/facility",
  redirect: "/facility/dashboard",
  component: FacilityAdmin,
  children: [
    {
      path: "/facility/dashboard",
      component: FacilityDboard,
    },
    {
      path: "/facility/profile",
      component: FacilityProfile,
    },
    {
      path: "/edit/profile",
      component: FacilityProfileUpdate,
    },
  ],
},
{
  path: "/facility/Facilityreport",
  component: FacilityReport,
},
{
  path: "/facility/maphistory",
  component: FacilityPatientMap,
},
{
  path: "/facility/wallet",
  component: FacilityAccount,
},
{
  path: "/facility/permissions",
  component: FacilityPermissions,
},


  // Auths

  {
    path: "/auth",
    redirect: "/auth/login",
    component: Auth,
    children: [
      {
        path: "/auth/login",
        component: Login,
      },
      {
        path: "/auth/register",
        component: Register,
      },
    ],
  },
  {
    path: "/landing",
    component: Landing,
  }, 
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/",
    component: Index,
  },
  // { path: "*", redirect: "/" },
]);


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
