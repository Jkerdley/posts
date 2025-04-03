import React from "react";
import "./loader.css";
export const Loader = () => {
    return (
        <section className="loader-container">
            <div
                className={`rounded-full w-12 h-12 border-3 border-solid animate-spin-custom`}
                style={{
                    borderColor: "#3498db20",
                    borderTopColor: "#3498db",
                }}
            ></div>
        </section>
    );
};
