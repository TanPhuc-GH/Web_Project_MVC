package com.wepr.booking.model;
import javax.persistence.*;
import java.util.Date;
import java.util.List;
import java.util.Set;

@Entity
@Table
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer paymentID;
    private Double paymentTotal;
    private String datePayment;
    @ManyToOne
    @JoinColumn(name = "userID")
    private User user;

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Integer getPaymentID() {
        return paymentID;
    }

    public void setPaymentID(Integer paymentID) {
        this.paymentID = paymentID;
    }

    public Double getPaymentTotal() {
        return paymentTotal;
    }

    public void setPaymentTotal(Double paymentTotal) {
        this.paymentTotal = paymentTotal;
    }

    public String getDatePayment() {
        return datePayment;
    }

    public void setDatePayment(String datePayment) {
        this.datePayment = datePayment;
    }


}
