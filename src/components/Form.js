import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBrand } from "../store/brandAction";
import { fetchDistance } from "../store/distanceAction";
import { Form, Input, Button, Select, Card, Col, Row } from "antd";
import "./Form.scss";

const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 10,
  },
};

const tailLayout = {
  wrapperCol: {
    offset: 1,
    span: 24,
  },
};

const setOptions = (data) => {
  return data.data.map((item, idx) => (
    <Option value={item} key={idx}>
      {item}
    </Option>
  ));
};

const HotelForm = (props) => {
  const distanceList = useSelector((state) => state.distance);
  const brandList = useSelector((state) => state.brand);
  const [hotelDetails, setHotelDetails] = useState({});

  const [form] = Form.useForm();
  const dispatch = useDispatch();

  React.useEffect(() => {
    checkParams(props.params);
    dispatch(fetchDistance());
    dispatch(fetchBrand());
  }, [props.params, dispatch]);

  const checkParams = (params) => {
    let flagUpdate = false;
    for (let d in params){
      if (d) {
        hotelDetails[d] = params[d];
        flagUpdate = true;
      }
    }
    if(flagUpdate)  onFill();
  };

  const onInputChange = (value, key) => {
    let details = hotelDetails;
    details[key] = value;
    setHotelDetails(details);
    let url = "?";
    let count = 1;
    for (let d in details) {
      count++;
      url = url + d + "=" + details[d] + "&";
      url = (count !== 1 ? "" : "&") + url;
    }
    props.history.push(url);
  };

  const onFill = () => {
    form.setFieldsValue({
      name: hotelDetails.name,
      location: hotelDetails.location,
      brand: hotelDetails.brand,
      distance: hotelDetails.distance
    });
  };

  const onFinish = (values) => {
    props.history.push("/");
    props.onSubmitForm(values);
    form.resetFields();
    setHotelDetails({});
  };

  let brandOption = brandList.brand.data
    ? setOptions(brandList.brand.data, "name")
    : [];
  let distanceOption = distanceList.distance.data
    ? setOptions(distanceList.distance.data, "id")
    : [];

  return (
    <div className="form-wrapper">
      <Row gutter={16}>
        <Col span={24}>
          <Card title="Hotel Form" bordered={false}>
            <Form {...layout} form={form} name="form" onFinish={onFinish}>
              <Form.Item
                name="name"
                label="Hotel Name"
                rules={[{ required: true }]}
              >
                <Input
                  value={hotelDetails.name}
                  onChange={(e) => onInputChange(e.target.value, "name")}
                />
              </Form.Item>

              <Form.Item
                name="location"
                label="Hotel Location"
                rules={[{ required: true }]}
              >
                <Input
                  value={hotelDetails.location}
                  onChange={(e) => onInputChange(e.target.value, "location")}
                />
              </Form.Item>

              <Form.Item
                name="distance"
                label="Distance"
                rules={[{ required: true }]}
              >
                <Select
                  placeholder="Please select Distance"
                  onChange={(value) => onInputChange(value, "distance")}
                  value={hotelDetails.distance}
                  allowClear
                >
                  {distanceOption}
                </Select>
              </Form.Item>

              <Form.Item
                name="brand"
                label="Brands"
                rules={[{ required: true }]}
              >
                <Select
                  placeholder="Please select a Brand"
                  onChange={(value) => onInputChange(value, "brand")}
                  value={hotelDetails.brand}
                  allowClear
                >
                  {brandOption}
                </Select>
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default HotelForm;
