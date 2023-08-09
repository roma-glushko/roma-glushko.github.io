import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons/faCircleInfo"
import { faCircleRadiation } from "@fortawesome/free-solid-svg-icons/faCircleRadiation"
import { faBomb } from "@fortawesome/free-solid-svg-icons/faBomb"
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons/faCircleCheck"
import { faClock } from "@fortawesome/free-solid-svg-icons/faClock"

import "./Note.css"

export enum NoteTypes {
    INFO = `info`,
    TLDR = `tldr info`,
    SUCCESS = `success`,
    WARN = `warn`,
    DANGER = `danger`,
}

interface Props {
    title?: string;
    type?:  NoteTypes;
    showIcon?: boolean;
    children: any;
}

const Note = ({title, type = NoteTypes.INFO, showIcon = true, children}: Props) => {
    const iconMap = {
        [NoteTypes.INFO]: faCircleInfo,
        [NoteTypes.TLDR]: faClock,
        [NoteTypes.WARN]: faCircleRadiation,
        [NoteTypes.SUCCESS]: faCircleCheck,
        [NoteTypes.DANGER]: faBomb,
    }

    const icon = iconMap[type]

    return <aside className={`note ${type ? type : ""}`}>
        {showIcon && <div className="note-icon"><FontAwesomeIcon icon={icon} /></div>}
        {title && <div className="title">
            {title}
        </div>}
        <div className="body">
            {children}
        </div>
    </aside>
}


export default Note