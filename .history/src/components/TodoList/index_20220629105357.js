import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { addTodo } from "../../redux/actions";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { todoListSelector } from "../../redux/selectors";

export default function TodoList() {
  const [todoName, setTodoName] = useState("");
  const [priority, setPriority] = useState("Medium");

  const todoList = useSelector(todoListSelector);

  const dispatch = useDispatch();

  const handleAddButtonClick = () => {
    // dispatch action
    dispatch(
      addTodo({
        id: uuidv4,
        name: todoName,
        prioriry: priority,
        completed: false,
      })
    );
  };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((todo) => (
          <Todo name={todo.name} key={todo.id} priority={todo.prioriry} />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input
            value={todoName}
            onChange={(e) => setTodoName(e.target.value)}
          />
          <Select
            defaultValue="Medium"
            value={priority}
            onChange={(value) => setPriority(value)}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
