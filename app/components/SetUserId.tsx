'use client'
import { useEffect } from "react";

export default function SetUserId() {
    useEffect(() => {
        fetch('/api/').then(() => { });
    }, []);

    return null;
}