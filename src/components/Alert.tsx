import {ReactNode} from "react";

interface AlertProps{
    children: ReactNode;
}
export default function Alert({children}: AlertProps){
    return(
        <div class="alert alert-primary">
            {children}
        </div>
    )
}