import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Props } from '../interfaces/globalInterfaces';


export default function Timeline({ isComp }: Props) {
    return (
        <div>
            <GitHubCalendar 
                username="Nathapons" 
                year={2025} 
            />
        </div>
    );
}