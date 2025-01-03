
'use client';

import { Input } from "@material-tailwind/react";

export default function SearchComponent({ searchInput, setSearchInput }) {
    return (
        <div className="w-2/6">
            <Input
                value={searchInput}
                onChange={e => setSearchInput(e.target.value)}
                placeholder="검색어 입력"
                label="검색" 
                icon={<i className="fas fa-search"/>} />
        </div>
    );
};