import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ForgotPassword from './components/ForgotPassword';
import LoginPage from './components/LoginPage';
import RemoveActor from './components/RemoveActor';
import ViewAllCustomers from './components/ViewAllCustomers';
import ViewAllEmployers from './components/ViewAllEmployers';
import ViewAllRepresentatives from './components/ViewAllRepresentatives';
import MainPageCustomer from './components/MainPageCustomer';
import UpdateCustomer from './components/UpdateCustomer';
import Header from './components/Header';
import Footer from './components/Footer';
import UpdateEmployer from './components/UpdateEmployer';
import MainPageEmployer from './components/MainPageEmployer';
import MainPageRepresentative from './components/MainPageRepresentative';
import UpdateRepresentative from './components/UpdateRepresentative';
import GetTaxFormsForAdmin from './components/GetTaxFormsForAdmin';
import GetTaxFormsForRepresentative from './components/GetTaxFormsForRepresentative';
import VerifyTaxformByAdmin from './components/VerifyTaxformByAdmin';
import VerifyTaxformByRepresentative from './components/VerifyTaxformByRepresentative';
import ViewTaxformByRepresentative from './components/ViewTaxformByRepresentative';
import ViewTaxformByCustomer from './components/ViewTaxformByCustomer';
import ViewTaxformByAdmin from './components/ViewTaxformByAdmin';
import FileReturn from './components/FileReturn';
import MainPageAdmin from './components/MainPageAdmin';
import UpdateAdmin from './components/UpdateAdmin';
import ManageActor from './components/ManageActor';
import RegisterCustomer from './components/RegisterCustomer';
import RegisterEmployer from './components/RegisterEmployer';
import RegisterRepresentative from './components/RegisterRepresentative';
import ViewAdminNotice from './components/ViewAdminNotice';
import ViewRepresentativeNotice from './components/ViewRepresentativeNotice';
import ViewCustomerNotice from './components/ViewCustomerNotice';
import ViewCustomerProfile from './components/ViewCustomerProfile';
import ViewEmployerProfile from './components/ViewEmployerProfile';
import ViewRepresentativeProfile from './components/ViewRepresentativeProfile';
import AddTaxDetailsForEmployee from './components/AddTaxDetailsForEmployee';
import AddTaxDetailsByCustomer from './components/AddTaxDetailsByCustomer';
import ViewEmpForEmployer from './components/ViewEmpForEmployer';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/" component={LoginPage} exact={true} />
          <Route path="/login" component={LoginPage} exact={true} />

          <Route path="/mainpage-customer/:id1" component={MainPageCustomer}></Route>
          <Route path="/updateCustomer/:id1" component={UpdateCustomer}></Route>

          <Route path="/mainpage-employer/:id1" component={MainPageEmployer}></Route>
          <Route path="/updateEmployer/:id1" component={UpdateEmployer}></Route>

          <Route path="/mainpage-representative/:id1" component={MainPageRepresentative}></Route>
          <Route path="/updateRepresentative/:id1" component={UpdateRepresentative}></Route>

          <Route path="/mainpage-admin/:id1" component={MainPageAdmin}></Route>
          <Route path="/updateAdmin/:id1" component={UpdateAdmin}></Route>
          <Route path="/manageActors/:id1" component={ManageActor}></Route>

          <Route path="/remove" component={RemoveActor} />
          <Route path="/viewAllCustomers" component={ViewAllCustomers} />
          <Route path="/viewAllEmployers" component={ViewAllEmployers} />
          <Route path="/viewAllRepresentatives" component={ViewAllRepresentatives} />
          <Route path="/ForgotPassword" component={ForgotPassword} />

          <Route path="/registerCustomer" component={RegisterCustomer}></Route>
          <Route path="/registerEmployer" component={RegisterEmployer}></Route>
          <Route path="/registerRepresentative" component={RegisterRepresentative}></Route>

          <Route path="/getTaxFormsForAdmin" component={GetTaxFormsForAdmin} />
          <Route path="/getTaxFormsForRepresentative/:representativeId" component={GetTaxFormsForRepresentative} />
          <Route path="/verifyTaxformByAdmin/:taxformId/:choice" component={VerifyTaxformByAdmin} />
          <Route path="/verifyTaxformByRepresentative/:representativeId/:taxformId/:choice" component={VerifyTaxformByRepresentative} />
          <Route path="/viewTaxformByRepresentative/:representativeId/:taxformId" component={ViewTaxformByRepresentative} />
          <Route path="/viewTaxformByCustomer/:customerId" component={ViewTaxformByCustomer} />
          <Route path="/fileReturn/:customerId" component={FileReturn} />
          <Route path="/viewTaxFormByAdmin/:taxformId" component={ViewTaxformByAdmin} />

          <Route path="/viewcustomernotice/:id" component={ViewCustomerNotice}></Route>
          <Route path="/viewRepresentativeNotice/:id" component={ViewRepresentativeNotice}></Route>
          <Route path="/viewadminnotice/:id" component={ViewAdminNotice}></Route>

          <Route path="/viewCustomerProfile/:id1" component={ViewCustomerProfile}></Route>
          <Route path="/viewEmployerProfile/:id1" component={ViewEmployerProfile}></Route>
          <Route path="/viewRepresentativeProfile/:id1" component={ViewRepresentativeProfile}></Route>

          <Route path="/addTaxDetailsForEmployee/:id/:employerId" component={AddTaxDetailsForEmployee}></Route>
          <Route path="/addTaxDetailsByCustomer/:id" component={AddTaxDetailsByCustomer}></Route>
          <Route path="/viewEmpForEmployer/:id" component={ViewEmpForEmployer}></Route>

          <Route component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
