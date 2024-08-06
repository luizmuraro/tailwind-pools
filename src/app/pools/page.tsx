"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Modal, { ModalProps } from "@/components/Modal";

const MOCK_POOLS = [
  {
    poolID: "0x61FD2dedA9c8a1ddb9F3F436D548C58643936f01",
    name: "Teste nome 1",
    description: "Teste description 1",
    external_url: "Teste external_url 1",
    poolHistory: [{ date: "" }],
  },
  {
    poolID: "0x61FD2dedA9c8a1ddb9F3F436D548C58643936f02",

    name: "Teste nome 2",
    description: "Teste description 2",
    external_url: "Teste external_url 2",
    poolHistory: [{ date: "" }],
  },
  {
    poolID: "0x61FD2dedA9c8a1ddb9F3F436D548C58643936f03",
    name: "Teste nome 3",
    description: "Teste description 3",
    external_url: "Teste external_url 3",
    poolHistory: [{ date: "" }],
  },
];

export default function Pools() {
  const router = useRouter();
  const [modal, setModal] = useState<ModalProps>();
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <main className="flex flex-1 flex-col items-center text-zinc-700 my-6 ">
      <h2 className="text-zinc-50 text-3xl font-bold mb-8">My pools</h2>
      <div className="relative overflow-x-auto">
        <table className="w-full text-left  text-gray-500 overflow-scroll">
          <thead className=" text-zinc-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Last modif.
              </th>
              <th scope="col" className="px-6 py-3">
                PoolID
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {MOCK_POOLS.map((pool) => (
              <tr
                data-modal-target="default-modal"
                data-modal-toggle="default-modal"
                key={pool.poolID}
                onClick={() => {
                  setModal(pool);
                  setShowModal((prev) => !prev);
                }}
                className="bg-zinc-50 border-b hover:bg-zinc-50/85 cursor-pointer"
              >
                <td scope="row" className="px-6 py-4 text-gray-900">
                  08/06/2024
                </td>
                <td className="px-6 py-4">{pool.poolID}</td>
                <td className="px-6 py-4">{pool.name}</td>
                <td>
                  <button
                    onClick={(event) => {
                      event.stopPropagation();
                      router.push(`pools/edit/${pool.poolID}`);
                    }}
                    className="bg-indigo-400 rounded-full font-medium py-2 px-4 m-3 hover:bg-indigo-400/60 text-zinc-50"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {modal ? (
          <Modal
            modal={modal}
            show={showModal}
            handleClose={() => setShowModal((prev) => !prev)}
          />
        ) : null}
      </div>
    </main>
  );
}
