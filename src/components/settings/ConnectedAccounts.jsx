import { useState } from "react";
import SettingSection from "./SettingSection";
import { HelpCircle, Plus, } from "lucide-react";

const ConnectedAccounts = () => {
    const [connectedAccounts, setConnectedAccounts] = useState([
        {
            id: 1,
            name: "Google",
            connected: true,
            icon: "https://cdn-icons-png.flaticon.com/512/720/720255.png",
        },
        {
            id: 2,
            name: "Facebook",
            connected: true,
            icon: "https://img.freepik.com/premium-vector/facebook-vector-social-media-icon_459124-520.jpg?semt=ais_hybrid",
        },
        {
            id: 3,
            name: "Twitter",
            connected: true,
            icon: "https://static.vecteezy.com/system/resources/previews/016/716/467/non_2x/twitter-icon-free-png.png",
        },
    ]);
    return (
        <SettingSection icon={HelpCircle} title={"Connected Accounts"}>
            {connectedAccounts.map((account) => (
                <div key={account.id} className='flex items-center justify-between py-3'>
                    <div className='flex gap-1'>
                        <img src={account.icon} alt='Social img' className='size-6 object-cover rounded-full mr-2' />
                        <span className='text-gray-300'>{account.name}</span>
                    </div>
                    <button
                        className={`px-3 py-1 rounded ${account.connected ? "bg-green-600 hover:bg-green-700" : "bg-gray-600 hover:bg-gray-700"
                            } transition duration-200`}
                        onClick={() => {
                            setConnectedAccounts(
                                connectedAccounts.map((acc) => {
                                    if (acc.id === account.id) {
                                        return {
                                            ...acc,
                                            connected: !acc.connected,
                                        };
                                    }
                                    return acc;
                                })
                            );
                        }}
                    >
                        {account.connected ? "Connected" : "Connect"}
                    </button>
                </div>
            ))}
            <button className='mt-4 flex items-center text-indigo-400 hover:text-indigo-300 transition duration-200'>
                <Plus size={18} className='mr-2' /> Add Account
            </button>
        </SettingSection>
    );
};
export default ConnectedAccounts;