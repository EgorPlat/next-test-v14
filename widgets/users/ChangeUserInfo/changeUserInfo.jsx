"use client";
import { useState } from "react";

export default function ChangeUserInfo({ user }) {

    const [state, setState] = useState(false);

    return (
        <div className="changeUserInfo">
            <button onClick={() => setState(true)}>Open settings</button>
            {
                state && 
                <>
                    <p>Settings opened</p>
                    <button onClick={() => setState(false)}>Close settings?</button>
                </>
            }
        </div>
    )
}