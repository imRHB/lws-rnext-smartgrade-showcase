/* eslint-disable react/prop-types */
import { STUDENTS_RESULT } from "../data/data";

export default function StudentList() {
    const classOneResults = STUDENTS_RESULT.filter(
        (result) => result.class === "Class One"
    );
    const classTwoResults = STUDENTS_RESULT.filter(
        (result) => result.class === "Class Two"
    );
    const classThreeResults = STUDENTS_RESULT.filter(
        (result) => result.class === "Class Three"
    );

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
                    {/* class one */}
                    {/* <tr className="bg-white/5">
                        <td className="p-5 text-sm md:text-xl" colSpan="4">
                            Class One
                        </td>
                    </tr>
                    <tr className="border-b border-[#7ECEB529]">
                        <td className="p-5 text-sm md:text-xl">1</td>
                        <td className="p-5 text-sm md:text-xl">
                            <div className="flex space-x-3 items-center">
                                <img
                                    className="w-8 h-8"
                                    src="../assets/avatar.png"
                                    width="32"
                                    height="32"
                                    alt="John Smith"
                                />
                                <span className="whitespace-nowrap">
                                    John Smith
                                </span>
                            </div>
                        </td>
                        <td className="p-5 text-sm md:text-xl text-center">
                            A+
                        </td>
                        <td className="p-5 text-sm md:text-xl text-center">
                            98%
                        </td>
                    </tr>
                    <tr className="border-b border-[#7ECEB529]">
                        <td className="p-5 text-sm md:text-xl">2</td>
                        <td className="p-5 text-sm md:text-xl">
                            <div className="flex space-x-3 items-center">
                                <img
                                    className="w-8 h-8"
                                    src="../assets/avatar.png"
                                    width="32"
                                    height="32"
                                    alt="John Smith"
                                />
                                <span className="whitespace-nowrap">
                                    John Smith
                                </span>
                            </div>
                        </td>
                        <td className="p-5 text-sm md:text-xl text-center">
                            A+
                        </td>
                        <td className="p-5 text-sm md:text-xl text-center">
                            98%
                        </td>
                    </tr>
                    <tr className="border-b border-[#7ECEB529]">
                        <td className="p-5 text-sm md:text-xl">3</td>
                        <td className="p-5 text-sm md:text-xl">
                            <div className="flex space-x-3 items-center">
                                <img
                                    className="w-8 h-8"
                                    src="../assets/avatar.png"
                                    width="32"
                                    height="32"
                                    alt="John Smith"
                                />
                                <span className="whitespace-nowrap">
                                    John Smith
                                </span>
                            </div>
                        </td>
                        <td className="p-5 text-sm md:text-xl text-center">
                            A+
                        </td>
                        <td className="p-5 text-sm md:text-xl text-center">
                            98%
                        </td>
                    </tr> */}

                    {/* class two */}
                    {/* <tr className="bg-white/5">
                        <td className="p-5 text-sm md:text-xl" colSpan="4">
                            Class Two
                        </td>
                    </tr>
                    <tr className="border-b border-[#7ECEB529]">
                        <td className="p-5 text-sm md:text-xl">1</td>
                        <td className="p-5 text-sm md:text-xl">
                            <div className="flex space-x-3 items-center">
                                <img
                                    className="w-8 h-8"
                                    src="../assets/avatar.png"
                                    width="32"
                                    height="32"
                                    alt="John Smith"
                                />
                                <span className="whitespace-nowrap">
                                    John Smith
                                </span>
                            </div>
                        </td>
                        <td className="p-5 text-sm md:text-xl text-center">
                            A+
                        </td>
                        <td className="p-5 text-sm md:text-xl text-center">
                            98%
                        </td>
                    </tr>
                    <tr className="border-b border-[#7ECEB529]">
                        <td className="p-5 text-sm md:text-xl">2</td>
                        <td className="p-5 text-sm md:text-xl">
                            <div className="flex space-x-3 items-center">
                                <img
                                    className="w-8 h-8"
                                    src="../assets/avatar.png"
                                    width="32"
                                    height="32"
                                    alt="John Smith"
                                />
                                <span className="whitespace-nowrap">
                                    John Smith
                                </span>
                            </div>
                        </td>
                        <td className="p-5 text-sm md:text-xl text-center">
                            A+
                        </td>
                        <td className="p-5 text-sm md:text-xl text-center">
                            98%
                        </td>
                    </tr>
                    <tr className="border-b border-[#7ECEB529]">
                        <td className="p-5 text-sm md:text-xl">3</td>
                        <td className="p-5 text-sm md:text-xl">
                            <div className="flex space-x-3 items-center">
                                <img
                                    className="w-8 h-8"
                                    src="../assets/avatar.png"
                                    width="32"
                                    height="32"
                                    alt="John Smith"
                                />
                                <span className="whitespace-nowrap">
                                    John Smith
                                </span>
                            </div>
                        </td>
                        <td className="p-5 text-sm md:text-xl text-center">
                            A+
                        </td>
                        <td className="p-5 text-sm md:text-xl text-center">
                            98%
                        </td>
                    </tr> */}

                    <tr className="bg-white/5">
                        <td className="p-5 text-sm md:text-xl" colSpan="4">
                            Class One
                        </td>
                    </tr>
                    {classOneResults.map((result) => (
                        <TableRow key={result.id} data={result} />
                    ))}

                    <tr className="bg-white/5">
                        <td className="p-5 text-sm md:text-xl" colSpan="4">
                            Class Two
                        </td>
                    </tr>
                    {classTwoResults.map((result) => (
                        <TableRow key={result.id} data={result} />
                    ))}

                    <tr className="bg-white/5">
                        <td className="p-5 text-sm md:text-xl" colSpan="4">
                            Class Three
                        </td>
                    </tr>
                    {classThreeResults.map((result) => (
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
                        className="w-8 h-8"
                        src="../assets/avatar.png"
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
