package com.wepr.booking.model;
import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "user_tour_book")
public class User_Tour_Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer userBookTourID;
    private String dateBook;
    private Integer adultAmount;
    private Integer childAmount;
    private String dateDeparture;
    private Boolean paymentStatus = false;

    @ManyToOne
    @JoinColumn(name = "userID")
    private User user;
    @ManyToOne
    @JoinColumn(name = "tourID")
    private Tour tour;
    @ManyToOne
    @JoinColumn(name = "paymentID")
    private Payment payment;
    public Integer getUserBookTourID(){ return userBookTourID; }
    public void setUserBookTourID(Integer userBookTourID){ this.userBookTourID = userBookTourID; }

    public String getDateBook() {
        return dateBook;
    }

    public void setDateBook(String dateBook) {
        this.dateBook = dateBook;
    }

    public Integer getAdultAmount() {
        return adultAmount;
    }

    public void setAdultAmount(Integer adultAmount) {
        this.adultAmount = adultAmount;
    }

    public Integer getChildAmount() {
        return childAmount;
    }

    public void setChildAmount(Integer childAmount) {
        this.childAmount = childAmount;
    }

    public String getDateDeparture() {
        return dateDeparture;
    }

    public void setDateDeparture(String dateDeparture) {
        this.dateDeparture = dateDeparture;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Tour getTour() {
        return tour;
    }

    public void setTour(Tour tour) {
        this.tour = tour;
    }

    public Payment getPayment() {
        return payment;
    }

    public void setPayment(Payment payment) {
        this.payment = payment;
    }

    public Boolean getPaymentStatus() {
        return paymentStatus;
    }

    public void setPaymentStatus(Boolean paymentStatus) {
        this.paymentStatus = paymentStatus;
    }
}

