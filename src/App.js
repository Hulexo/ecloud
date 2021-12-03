import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

// kitchen
const Main = React.lazy(() => import("./layouts/kitchen/Main"));
const TableView1 = React.lazy(() => import("./layouts/kitchen/TableView1"));
const DashboardView1 = React.lazy(() =>
  import("./layouts/kitchen/DashboardView1")
);
const DashboardView2 = React.lazy(() =>
  import("./layouts/kitchen/DashboardView2")
);
const DashboardView3 = React.lazy(() =>
  import("./layouts/kitchen/DashboardView3")
);

//Orders
const MainTableView = React.lazy(() =>
  import("./layouts/orders/MainTableView")
);
const MapView1 = React.lazy(() => import("./layouts/orders/MapView1"));
const MapViewCardOrder = React.lazy(() =>
  import("./layouts/orders/MapViewCardOrder")
);
const NewOrderSelect = React.lazy(() =>
  import("./layouts/orders/NewOrderSelect")
);

//Statistics
const MainStatistics = React.lazy(() =>
  import("./layouts/statistics/MainStatistics")
);
const SelectionMain = React.lazy(() =>
  import("./layouts/statistics/SelectionMain")
);

//Onboarding
const MainOnborad = React.lazy(() =>
  import("./layouts/onboarding/MainOnborad")
);
const EditKitchen = React.lazy(() =>
  import("./layouts/onboarding/EditKitchen")
);

//Kitchen Onboarding
const EditAdress = React.lazy(() => import("./components/reuseable/MapModel"));
const KitchenUpload1 = React.lazy(() =>
  import("./layouts/kitchenOnboarding/KitchenUpload1")
);
const KitchenUpload2 = React.lazy(() =>
  import("./layouts/kitchenOnboarding/KitchenUpload2")
);
const CompareMenu2 = React.lazy(() =>
  import("./layouts/kitchenOnboarding/CompareMenu2")
);
const CompareMenu3 = React.lazy(() =>
  import("./layouts/kitchenOnboarding/CompareMenu3")
);
const AddKitchenAdons = React.lazy(() =>
  import("./layouts/kitchenOnboarding/AddKitchenAdons")
);

//Brand Onboarding
// Edit kitchen pages will be created

//Others
const Login = React.lazy(() => import("./components/Login"));
const BreakfastCard = React.lazy(() =>
  import("./layouts/others/BreakfastCard")
);
const GourmetChicken = React.lazy(() =>
  import("./layouts/others/GourmetChicken")
);
const ChickenPotatoesCard = React.lazy(() =>
  import("./layouts/others/ChickenPotatoesCard")
);
const OrderDetail1 = React.lazy(() => import("./layouts/others/OrderDetail1"));
const OrderDetail2 = React.lazy(() => import("./layouts/others/OrderDetail2"));
const OrderDetail3 = React.lazy(() => import("./layouts/others/OrderDetail3"));
const OrderDetail4 = React.lazy(() => import("./layouts/others/OrderDetail4"));
const OrderDetail5 = React.lazy(() => import("./layouts/others/OrderDetail5"));

// spiner
const spiner = (
  <div className="d-flex justify-content-center">
    <div
      className="spinner-grow text-light coustom-spiner-class"
      role="status"
    ></div>
  </div>
);

function App() {
  return (
    <div>
      <Router>
        <React.Suspense fallback={spiner}>
          <Switch>
            {/* Kitchen Routes */}
            <Route path="/main" component={Main} />
            <Route path="/table-view1" component={TableView1} />
            <Route path="/dashboard-view1" component={DashboardView1} />
            <Route path="/dashboard-view2" component={DashboardView2} />
            <Route path="/dashboard-view3" component={DashboardView3} />
            {/* Orders Routes */}
            <Route path="/main-table-view" component={MainTableView} />
            <Route path="/map-view1" component={MapView1} />
            <Route path="/map-card-order" component={MapViewCardOrder} />
            <Route path="/new-order-select" component={NewOrderSelect} />
            {/* Statistics */}
            <Route path="/main-statictics" component={MainStatistics} />
            <Route path="/selection-main" component={SelectionMain} />
            {/* Onboarding */}
            <Route path="/main-onboarding" component={MainOnborad} />
            <Route path="/edit-kitchen" component={EditKitchen} />
            {/* kitchen orboarding */}
            <Route path="/add-kitchen" component={EditKitchen} />
            <Route path="/add-adress" component={EditAdress} />
            <Route path="/kitchen-upload1" component={KitchenUpload1} />
            <Route path="/kitchen-upload2" component={KitchenUpload2} />
            <Route path="/kitchen-upload3" component={EditKitchen} />
            <Route path="/compare1" component={CompareMenu2} />
            <Route path="/compare2" component={CompareMenu2} />
            <Route path="/compare3" component={CompareMenu3} />
            <Route path="/kitchen-adons" component={AddKitchenAdons} />
            {/* Add brand menu */}
            <Route path="/add-brand" component={EditKitchen} />
            <Route path="/add-brand2" component={EditKitchen} />
            {/* Otheres */}
            <Route path="/breakfast-card" component={BreakfastCard} />
            <Route path="/gourmet-chicken" component={GourmetChicken} />
            <Route
              path="/chicken-potatoes-card"
              component={ChickenPotatoesCard}
            />
            <Route path="/order-detail1" component={OrderDetail1} />
            <Route path="/order-detail2" component={OrderDetail2} />
            <Route path="/order-detail3" component={OrderDetail3} />
            <Route path="/order-detail4" component={OrderDetail4} />
            <Route path="/order-detail5" component={OrderDetail5} />
            <Route path="/" component={Login} />
          </Switch>
        </React.Suspense>
      </Router>
    </div>
  );
}

export default App;
