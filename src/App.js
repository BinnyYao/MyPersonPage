import React from "react";

export default function App() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(120deg, #e0eafc 0%, #cfdef3 100%)",
      padding: "40px 0"
    }}>
      <div style={{
        maxWidth: 800,
        margin: "0 auto",
        fontFamily: "'Segoe UI', 'PingFang SC', 'Microsoft YaHei', sans-serif",
        background: "#fff",
        boxShadow: "0 8px 32px rgba(60,120,200,0.12)",
        padding: 40,
        borderRadius: 18,
        border: "1px solid #e3eaf2"
      }}>
        <div style={{ display: "flex", alignItems: "center", flexDirection: "column", marginBottom: 24 }}>
          <img src="https://avatars.githubusercontent.com/u/1?v=4" alt="avatar" style={{ width: 96, height: 96, borderRadius: "50%", boxShadow: "0 2px 8px #eee", marginBottom: 16 }} />
          <h1 style={{ textAlign: "center", color: "#1976d2", fontWeight: 700, fontSize: 32, margin: 0 }}>李四的个人简历</h1>
          <span style={{ color: "#888", fontSize: 16, marginTop: 4 }}>10年资深 .Net C# 后端开发工程师</span>
        </div>
        <hr style={{ border: "none", borderTop: "1px solid #e3eaf2", margin: "24px 0" }} />
        <section>
          <h2 style={{ color: "#1976d2", fontSize: 22, marginBottom: 12 }}>
            <span role="img" aria-label="user">👤</span> 基本信息
          </h2>
          <ul style={{ paddingLeft: 20, marginBottom: 0 }}>
            <li>姓名：李四</li>
            <li>性别：男</li>
            <li>年龄：35</li>
            <li>邮箱：lisi@example.com</li>
            <li>电话：139-8888-8888</li>
          </ul>
        </section>
        <hr style={{ border: "none", borderTop: "1px solid #e3eaf2", margin: "24px 0" }} />
        <section>
          <h2 style={{ color: "#1976d2", fontSize: 22, marginBottom: 12 }}>
            <span role="img" aria-label="education">🎓</span> 教育背景
          </h2>
          <ul style={{ paddingLeft: 20, marginBottom: 0 }}>
            <li>2010-2014 本科 软件工程 清华大学</li>
          </ul>
        </section>
        <hr style={{ border: "none", borderTop: "1px solid #e3eaf2", margin: "24px 0" }} />
        <section>
          <h2 style={{ color: "#1976d2", fontSize: 22, marginBottom: 12 }}>
            <span role="img" aria-label="work">💼</span> 工作经历
          </h2>
          <ul style={{ paddingLeft: 20, marginBottom: 0 }}>
            <li>2014-2018 .Net开发工程师 用友网络</li>
            <li>2018-2025 资深 .Net C# 后端开发工程师 腾讯</li>
          </ul>
        </section>
        <hr style={{ border: "none", borderTop: "1px solid #e3eaf2", margin: "24px 0" }} />
        <section>
          <h2 style={{ color: "#1976d2", fontSize: 22, marginBottom: 12 }}>
            <span role="img" aria-label="skills">🛠️</span> 技能特长
          </h2>
          <ul style={{ paddingLeft: 20, marginBottom: 0 }}>
            <li>精通C#、.Net/.Net Core、ASP.NET、Entity Framework</li>
            <li>熟悉SQL Server、Redis、RabbitMQ、Docker、微服务架构</li>
            <li>良好的系统设计、性能优化与团队协作能力</li>
          </ul>
        </section>
        <hr style={{ border: "none", borderTop: "1px solid #e3eaf2", margin: "24px 0" }} />
        <section>
          <h2 style={{ color: "#1976d2", fontSize: 22, marginBottom: 12 }}>
            <span role="img" aria-label="self">🌟</span> 自我评价
          </h2>
          <p style={{ color: "#444", fontSize: 16, lineHeight: 1.8, marginBottom: 0 }}>
            热爱.Net与C#技术，专注高性能企业级系统架构，具备丰富的项目开发与团队管理经验，持续学习新技术，追求卓越。
          </p>
        </section>
      </div>
    </div>
  );
}
