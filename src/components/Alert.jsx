import { Alert } from 'antd';

export default function AlertComponent(){
    return(
        <Alert
      title="Error"
      description="This is an error message about copywriting."
      type="error"
      showIcon
    />
    )
}