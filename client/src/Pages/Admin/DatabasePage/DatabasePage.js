import AdminLayout from "../../../Components/Layout/AdminLayout/AdminLayout";
import { useEffect, useMemo, useState } from "react";
import InfoServices from "../../../Services/UserServices/InfoServices";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Card, Typography } from "@material-tailwind/react";
import SuccessMessage from "../../../Components/ReUse/SuccessMessage/SuccessMessage";

const TABLE_HEAD = ["NAME", "EMAIL", "USER TYPE", "MONEY", ""];

const DatabasePage = () => {
  const token = useSelector((state) => state.user.token);
  const navigate = useNavigate();
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const getAllUserData = async () => {
      const res = await InfoServices.getAllUser(token);

      console.log("res.data: ", res.data);

      const dataForTable = res.data.map((userInfo, idx) => {
        return {
          id: userInfo.id,
          name: userInfo.name,
          email: userInfo.email,
          user_type: userInfo.user_type,
          money: userInfo.money,
        };
      });
      setTableData(dataForTable);
    };

    getAllUserData();
  }, []);

  const updateMoney = async (userId, money) => {
    const res = await InfoServices.updateUserMoney(userId, money, token);
    SuccessMessage("Success", "Update money success");
  };

  return (
    <AdminLayout>
      <Card className="overflow-scroll h-full w-full">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map(({ id, name, email, user_type, money }, index) => {
              return (
                <tr key={name} className="even:bg-blue-gray-50/50">
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {name}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {email}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {user_type}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <input
                      className="font-medium text-blue"
                      defaultValue={`${money}$`}
                      onChange={(e) => {
                        let tableDataNew = tableData;
                        tableDataNew[index].money = e.currentTarget.value;
                        setTableData(tableDataNew);
                      }}
                    />
                  </td>
                  <td className="p-4">
                    <button
                      className="bg-blue-500 py-[1px] px-2 rounded text-white"
                      onClick={() => {
                        updateMoney(id, parseFloat(tableData[index].money));
                      }}
                    >
                      Save
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </AdminLayout>
  );
};

export default DatabasePage;
