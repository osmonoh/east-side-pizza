import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateName } from "./userSlice";
import ButtonCustom from "../../ui/interactive/ButtonCustom";

const CreateUser = () => {
    const [userName, setUserName] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!userName) return;

        dispatch(updateName(userName));
        navigate("/menu");
    };

    return (
        <form onSubmit={handleSubmit}>
            <p className="mb-4 text-sm text-stone-600 md:text-base">
                👋 Welcome! Please start by telling us your name:
            </p>

            <input
                className="mb-8 w-72 rounded-full border border-stone-200 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-400 md:px-6 md:py-3"
                type="text"
                placeholder="Your full name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />

            {userName !== "" && (
                <div>
                    <ButtonCustom type="primary" variant="big">
                        Start ordering
                    </ButtonCustom>
                </div>
            )}
        </form>
    );
};

export default CreateUser;
