
import React from 'react';

const PreferenceCard = ({ item }) => {
    return (
        <label htmlFor="preference1" className="flex items-start rounded-lg hover:bg-gray-100 transition duration-150 cursor-pointer">
            <img src='@/assets/icons/thumbnail.svg' alt="Comic Thumbnail" className="mr-4" />
            <div className="flex flex-col">
                <p className="dmSans-medium">{item.name}</p>
                <p className="mb-2">
                    Supporting line text lorem ipsum dolor sit amet, consectetur
                </p>
            </div>
            <input type="checkbox" id="preference1" name="preference1" className="accent-red-800 w-6 h-6 ml-2 cursor-pointer" />
        </label>
    );
}

export default PreferenceCard;
