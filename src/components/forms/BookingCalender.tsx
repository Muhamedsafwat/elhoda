import { CalendarDays} from 'lucide-react';
import React from 'react';
import Socialmedia from '../media/Socialmedia';

interface BookingCalenderProps {
    iconSize : number
   }

const BookingCalender: React.FC<BookingCalenderProps> = ({ iconSize }) => {
    return <Socialmedia iconSize={iconSize} img={<CalendarDays />} isRounded={true}></Socialmedia>;
}

export default BookingCalender;

