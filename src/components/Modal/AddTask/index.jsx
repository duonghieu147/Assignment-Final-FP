import { Button, DatePicker, Form, Input, Modal, Select } from "antd";
import moment from "moment";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "../../../assets/svgs/Icon";
import { addTask } from "../../../Redux/actions/taskAction";
import "./index.scss";

const { Option } = Select;
moment.locale("en", {
  monthsShort: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
});

function AddTaskModal({ isModalAdd, setIsModalAdd }) {
  const dispatch = useDispatch();

  const [form] = Form.useForm();
  const [content, setContent] = useState("");
  const [date, setDate] = useState(null);
  const [type, setType] = useState("");
  const { userInfo } = useSelector((state) => state.userLogin);
  const handleOk = () => {
    setIsModalAdd(false);
  };

  const handleCancel = () => {
    setIsModalAdd(false);
  };
  const addTaskHandle = () => {
    const task = {
      userId: userInfo.id,
      content: content,
      status: type || "doing",
      dateId: moment(date).date(),
      monthId: moment(date).month() + 1,
    };
    console.log(task);
    dispatch(addTask(task, userInfo));
    handleCancel();
    form.resetFields();
  };
  return (
    <>
      <Modal
        title="Add Task"
        width={376}
        footer={null}
        visible={isModalAdd}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} onFinish={addTaskHandle} layout="vertical">
          <Form.Item
            style={{ marginBottom: 16, marginTop: -13 }}
            label="Content:"
            name="content"
            rules={[
              {
                required: true,
                message: "Please input content",
              },
            ]}
          >
            <Input
              placeholder="Content"
              width={328}
              height={32}
              onChange={(e) => setContent(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            style={{ marginBottom: 16 }}
            label="Select Date:"
            name="date"
            rules={[
              {
                required: true,
                message: "Please input date",
              },
            ]}
          >
            <DatePicker
              disabledDate={(currentDate) => {
                return (
                  (currentDate && currentDate.year() !== 2021) ||
                  currentDate.month() < 8
                );
              }}
              showToday={false}
              format={"DD/MM/YYYY"}
              placeholder="Select Date"
              style={{ width: 328, height: 32 }}
              onChange={(value) => {
                setDate(value);
              }}
            />
          </Form.Item>
          <Form.Item label="Type:">
            <Select
              defaultValue="doing"
              style={{ width: 328, height: 32 }}
              onChange={(value) => setType(value)}
            >
              <Option
                style={{
                  color: "#0085ff",
                  padding: "6 12",
                  borderRadius: 8,
                  background: "rgba(0, 133, 255, 0.1)",
                  marginBottom: 6,
                }}
                value="doing"
              >
                Doing
              </Option>
              <Option
                style={{
                  color: "#F98600",
                  padding: "6 12",
                  borderRadius: 8,
                  background: "rgba(255, 150, 27, 0.1)",
                  marginBottom: 6,
                }}
                value="pending"
              >
                Pending
              </Option>
              <Option
                style={{
                  color: "#00BA34",
                  padding: "6 12",
                  borderRadius: 8,
                  background: "rgba(0, 186, 52, 0.1)",
                }}
                value="success"
              >
                Success
              </Option>
            </Select>
          </Form.Item>
          <Form.Item style={{ textAlign: "right", marginBottom: 0 }}>
            <Button
              style={{
                width: 89,
                height: 40,
                borderRadius: 8,
                marginRight: 8,
                border: "none",
                color: "#1c1c1c",
                fontWeight: 500,
              }}
              onClick={() => {
                handleCancel();
              }}
            >
              Cancel
            </Button>
            <Button
              htmlType="submit"
              style={{
                width: 89,
                height: 40,
                borderRadius: 8,
                fontWeight: 500,
                paddingLeft: 11,
              }}
              type="primary"
              icon={
                <Icon.Done
                  style={{
                    marginRight: 11,
                  }}
                />
              }
            >
              Done
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default AddTaskModal;
