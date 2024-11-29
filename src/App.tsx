import {Button, Form, Input} from "antd";

type FormValues = {
  name: string
  description?: string
}

function InsideForm() {
  const form = Form.useFormInstance()
  const name = Form.useWatch('name')
  const description = Form.useWatch('description')
  console.log('the field value for name inside form is ', form.getFieldValue('name'))
  console.log('the watched name inside form is ', name)
  console.log('the watched description inside form is ', description)
  return null
}

function App() {
  const [form] = Form.useForm<FormValues>()
  const name = Form.useWatch('name')
  const description = Form.useWatch('description')

  const submit = (values: FormValues) => {
    console.log('submit', values)
  }
  console.log('the watched name outside form is ', name)
  console.log('the watched description outside form is ', description)
  return (
    <Form form={form} onFinish={submit} initialValues={{ name: ''}}>
      <InsideForm />
      <Form.Item name="name"><Input /></Form.Item>
      <Form.Item name="description"><Input /></Form.Item>
      <Button htmlType="submit" type="primary">Submit</Button>
    </Form>
  )
}

export default App
