import React from "react";
import { Switch, Route } from "react-router-dom";
import Form from "./components/Form";
import setLocalStore from "./setLocalStore";
import "./App.scss";
import queryString from "query-string";
import { Layout, Menu } from "antd";

const { Header, Content, Footer } = Layout;

function App() {
  const [hotelDetails, setHotelDetails] = React.useState({});
  React.useEffect(() => {
    setLocalStore(hotelDetails);
  }, [hotelDetails]);

  return (
    <Layout className="layout">
      <Header>
        <div className="logo">Hotel Details</div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">Form</Menu.Item>
        </Menu>
      </Header>
      <Content>
        <div className="site-layout-content">
          <div className="App">
            <Switch>
              <Route
                path="/"
                render={({ location, history }) => {
                  const params = queryString.parse(location.search);
                  return (
                    <Form
                      onSubmitForm={setHotelDetails}
                      params={params}
                      history={history}
                    />
                  );
                }}
              />
            </Switch>
          </div>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Hotel Details Form
      </Footer>
    </Layout>
  );
}

export default App;
