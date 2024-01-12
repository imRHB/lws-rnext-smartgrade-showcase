/* eslint-disable react/prop-types */
import { STUDENTS_RESULT } from "../data/mock";

export default function StudentList() {
    return (
        <div className="max-w-[848px] mx-auto overflow-auto">
            <table className="w-full">
                <thead>
                    <tr className="border-b border-[#FFFFFF0D]">
                        <th className="uppercase p-5 text-sm md:text-xl font-semibold md:min-w-[110px] text-left">
                            ID
                        </th>
                        <th className="p-5 text-sm md:text-xl font-semibold text-left">
                            Name
                        </th>
                        <th className="p-5 text-sm md:text-xl font-semibold">
                            Scores
                        </th>
                        <th className="p-5 text-sm md:text-xl font-semibold">
                            Percentage
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white/5">
                        <td className="p-5 text-sm md:text-xl" colSpan="4">
                            Class One
                        </td>
                    </tr>
                    {STUDENTS_RESULT["class-one"].map((result) => (
                        <TableRow key={result.id} data={result} />
                    ))}

                    <tr className="bg-white/5">
                        <td className="p-5 text-sm md:text-xl" colSpan="4">
                            Class Two
                        </td>
                    </tr>
                    {STUDENTS_RESULT["class-two"].map((result) => (
                        <TableRow key={result.id} data={result} />
                    ))}

                    <tr className="bg-white/5">
                        <td className="p-5 text-sm md:text-xl" colSpan="4">
                            Class Three
                        </td>
                    </tr>
                    {STUDENTS_RESULT["class-three"].map((result) => (
                        <TableRow key={result.id} data={result} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function TableRow({ data = {} }) {
    const { id, name, scores, percentage } = data;

    return (
        <tr className="border-b border-[#7ECEB529]">
            <td className="p-5 text-sm md:text-xl">{id}</td>
            <td className="p-5 text-sm md:text-xl">
                <div className="flex space-x-3 items-center">
                    <img
                        className="w-8 h-8 rounded-full"
                        src={`https://i.pravatar.cc/80/${id}`}
                        width="32"
                        height="32"
                        alt="John Smith"
                    />
                    <span className="whitespace-nowrap">{name}</span>
                </div>
            </td>
            <td className="p-5 text-sm md:text-xl text-center">{scores}</td>
            <td className="p-5 text-sm md:text-xl text-center">{percentage}</td>
        </tr>
    );
}
