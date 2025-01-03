
'use client';

import DropboxImageList from "@/components/dropbox-image-list";
import FileDragDropZone from "@/components/file-dragdropzone";
import Logo from "@/components/header-component";
import SearchComponent from "@/components/search-component";
import { useState } from "react";

export default function UI() {

    const [searchInput, setSearchInput] = useState('');

    return (
        <main className="w-full p-5 flex flex-col gap-5">
            <Logo />
            <SearchComponent 
                searchInput={searchInput}
                setSearchInput={setSearchInput} />
            <FileDragDropZone />
            <DropboxImageList />
        </main>
    );
}