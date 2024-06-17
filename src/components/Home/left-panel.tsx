import { ListFilter, LogOut, MessageSquareDiff, User } from "lucide-react";
import { Input } from "../ui/input";
import ThemeSwitch from '@/components/theme-switch'

const LeftPanel = () => {
    const conversations = [];

    return (
        <div className='w-1/4 border-gray-600 border-r'>
            <div className='flex justify-between items-center p-3'>
                <User size={24} />
                <div className='flex items-center gap-3'>
                    <MessageSquareDiff size={20} /> {/* TODO: This line will be replaced with <UserListDialog /> */}
                    <ThemeSwitch />
                    <LogOut size={20} className='cursor-pointer' />
                </div>
            </div>

            <div className='p-2 flex items-center gap-2'>
                <Input
                    type='text'
                    placeholder='Search chat'
                    className='text-sm rounded bg-gray-100'
                />
                <ListFilter className='cursor-pointer' />
            </div>

            <div className='flex flex-col gap-0 max-h-[80%] overflow-auto'>
                {conversations?.length === 0 && (
                    <div>
                        <p className='text-center text-gray-500 text-sm mt-3'>No conversations yet</p>
                    </div>
                )}
            </div>

        </div>
    );
};
export default LeftPanel;