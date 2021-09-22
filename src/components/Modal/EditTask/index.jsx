import { Button, DatePicker, Form, Input, Modal, Select } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "../../../assets/svgs/Icon";
import { deleteTask, updateTask } from "../../../Redux/actions/taskAction";

const { Option } = Select;
function EditTaskModal({ isModalEdit, setIsModalEdit, item }) {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [content, setContent] = useState("");
  const [type, setType] = useState("");
  const { userInfo } = useSelector((state) => state.userLogin);
  const handleOk = () => {
    setIsModalEdit(false);
  };

  const handleCancel = () => {
    setIsModalEdit(false);
  };
  const updateTaskHandle = () => {
    const task = {
      id: item.id,
      userId: userInfo.id,
      content: content || item.content,
      status: type || item.status,
    };
    console.log(task);
    dispatch(updateTask(task, userInfo));
    handleCancel();
  };
  const deleteTaskHandle = () => {
    dispatch(deleteTask(item.id, userInfo));
    handleCancel();
  };
  return (
    <>
      <Modal
        title={`Task: #${item.id}`}
        width={376}
        footer={null}
        visible={isModalEdit}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} onFinish={updateTaskHandle} layout="vertical">
          <Form.Item
            style={{ marginBottom: 16, marginTop: -13 }}
            label="Content:"
            // name="content"
            // rules={[
            //   {
            //     required: true,
            //     message: "Please input content",
            //   },
            // ]}
          >
            <Input
              defaultValue={item.content}
              width={328}
              height={32}
              onChange={(e) => setContent(e.target.value)}
            />
          </Form.Item>
          <Form.Item style={{ marginBottom: 16 }} label="Select Date:">
            <DatePicker
              disabled
              format={"DD/MM/YYYY"}
              style={{ width: 328, height: 32 }}
              placeholder={`${item.dateId}/${item.monthId}/2021`}
            />
          </Form.Item>
          <Form.Item label="Type:">
            <Select
              defaultValue={item.status}
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
              style={{
                width: 89,
                height: 40,
                borderRadius: 8,
                marginRight: 8,
                background: "#E92C2C",
                color: "#fff",
                fontWeight: 500,
              }}
              icon={
                <Icon.Delete
                  style={{
                    marginRight: 9,
                  }}
                />
              }
              onClick={() => {
                deleteTaskHandle();
              }}
            >
              Delete
            </Button>
            <Button
              htmlType="submit"
              style={{
                width: 89,
                height: 40,
                borderRadius: 8,
                fontWeight: 500,
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

export default EditTaskModal;
